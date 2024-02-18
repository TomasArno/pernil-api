import { Products } from "../models/index.model";
import { BaseController } from "./index.controller";

class ProductsController extends BaseController {
  constructor() {
    super(Products);
  }
}

export default ProductsController;
