import { Users } from "../models/index.model";
import { BaseController } from "./index.controller";

abstract class UsersController extends BaseController {
  constructor() {
    super(Users);
  }
}

export default UsersController;
