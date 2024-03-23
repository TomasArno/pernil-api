import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

import Auth from '../services/auth.service';
import Users from '../services/users.service';

import { createHash, verifyPassword, genSalt } from '../utils/hash.util';
import { createToken } from '../utils/jwt.util';

passport.use(
  'register',
  new LocalStrategy(
    { passReqToCallback: true, usernameField: 'fullName' },
    async (
      req,
      fullName,
      password,
      done: (error: Error, user?: {}, opt?) => void
    ) => {
      try {
        const searchedUser = await Users.getByFullName(fullName);

        if (searchedUser)
          return done(null, false, {
            message: 'User already exists',
            statusCode: 400,
          });

        const salt = genSalt();
        const hashPassword = createHash(salt, password);

        const user = await Users.create({ fullName });
        await Auth.create({ UserId: user.id, password: hashPassword });

        req['token'] = createToken({ fullName });

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    { passReqToCallback: true, usernameField: 'fullName' },
    async (
      req,
      fullName,
      incomingPassword,
      done: (error: Error, user?: {}, opt?) => void
    ) => {
      try {
        const user = await Users.getByFullName(fullName);
        if (!user) return done(null, false, { message: 'bad auth' });

        const { password } = await Auth.getById(user.id);

        const [storedSalt] = password.split(':');

        const hashedPassword = createHash(storedSalt, incomingPassword);

        if (!verifyPassword(password, hashedPassword))
          return done(null, false, { message: 'bad auth' });

        req['token'] = createToken({ fullName });

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'jwt',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => req?.cookies['token'],
      ]),
      secretOrKey: process.env.JWT_SECRET,
    },
    async (payload, done) => {
      try {
        const user = await Users.getByFullName(payload.fullName);

        if (!user) return done(null, false);

        done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport;
