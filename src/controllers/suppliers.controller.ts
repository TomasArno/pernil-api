import { Suppliers } from "../models/index.model";
import { BaseController } from "./index.controller";

class SuppliersController extends BaseController {
  constructor() {
    super(Suppliers);
  }
}

export default SuppliersController;
