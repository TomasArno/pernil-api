import { Users } from "../models/index.model";
import { BaseManager } from "./index.controller";

class UsersManager extends BaseManager {
  constructor() {
    super(Users);
  }
}

const UsersController = new UsersManager();

export default UsersController;
