import { Movements } from "../models/index.model";
import { BaseManager } from "./index.controller";

class MovementsManager extends BaseManager {
  constructor() {
    super(Movements);
  }
}

const MovementsController = new MovementsManager();

export default MovementsController;
