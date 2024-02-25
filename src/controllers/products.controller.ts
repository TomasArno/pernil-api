import { Products } from "../models/index.model";
import { BaseManager } from "./index.controller";

class ProductsManager extends BaseManager {
  constructor() {
    super(Products);
  }
}

const ProductsController = new ProductsManager();

export default ProductsController;
