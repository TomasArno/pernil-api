import { Clients } from "../models/index.model";
import { BaseController } from "./index.controller";

class ClientsController extends BaseController {
  constructor() {
    super(Clients);
  }
}

export default ClientsController;
