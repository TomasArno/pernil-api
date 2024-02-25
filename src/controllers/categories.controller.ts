import { Categories } from "../models/index.model";
import { BaseManager } from "./index.controller";

class CategoriesManager extends BaseManager {
  constructor() {
    super(Categories);
  }
}

const CategoriesController = new CategoriesManager();

export default CategoriesController;
