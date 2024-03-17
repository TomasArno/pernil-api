import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

import Users from '../services/users.service';

import { createHash } from '../utils/hash.util';

passport.use(
  'register',
  new LocalStrategy(
    { passReqToCallback: true, usernameField: 'fullName' },
    async (req, fullName, password, done) => {
      try {
        const searchedUser = await Users.getByFullName(fullName);

        if (searchedUser.id)
          return done(null, false, { message: 'User already exists' });

        req.body.password = createHash(password);

        const user = await Users.create(req.body);

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

/// LOGIN
///  JWT PASSPORT

export default passport;
