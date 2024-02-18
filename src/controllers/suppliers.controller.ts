import { Suppliers } from "../models/index.model";
import { BaseManager } from "./index.controller";

class SuppliersManager extends BaseManager {
  constructor() {
    super(Suppliers);
  }
}

const SuppliersController = new SuppliersManager();

export default SuppliersController;
