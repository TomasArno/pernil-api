import { sign, verify } from 'jsonwebtoken';

export const verifyToken = (token) => verify(token, process.env.JWT_SECRET);

export const createToken = (data) =>
  sign(data, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 7,
  });
