import { Movements } from "../models/index.model";
import { BaseController } from "./index.controller";

class MovementsController extends BaseController {
  constructor() {
    super(Movements);
  }
}

export default MovementsController;
