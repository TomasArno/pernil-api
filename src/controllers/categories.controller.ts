import { Categories } from "../models/index.model";
import { BaseController } from "./index.controller";

class CategoriesController extends BaseController {
  constructor() {
    super(Categories);
  }
}

export default CategoriesController;
