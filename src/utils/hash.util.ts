import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto';
import { PEPPER } from './constants';

const genSalt = () => randomBytes(18).toString('hex');

const verifyPassword = (storedPassword: string, incomingPassword: Buffer) => {
  const storedHashedPasswordBuffer = Buffer.from(storedPassword, 'hex');

  // Used timingSafeEqual to mitigate timing attacks
  const match = timingSafeEqual(incomingPassword, storedHashedPasswordBuffer);

  return match;
};

const hashPassword = (password: string, salt: string) =>
  scryptSync(password, salt + PEPPER, 45);

const createHash = (password: string) => {
  const salt = genSalt();
  const hashedPassword = hashPassword(password, salt);
  const saltAndHash = `${salt}:${hashedPassword.toString('hex')}`;

  return saltAndHash;
};

export { createHash, verifyPassword };
