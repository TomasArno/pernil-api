import { Auth } from '../models/auth.model';

export default abstract class AuthService {
  static async create(data: { password: string; UserId: string }) {
    try {
      await Auth.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return (await Auth.findByPk(id))?.dataValues;
    } catch (error) {
      throw error;
    }
  }
}
