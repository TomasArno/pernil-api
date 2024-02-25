import { Clients } from "../models/index.model";
import { BaseManager } from "./index.controller";

class ClientsManager extends BaseManager {
  constructor() {
    super(Clients);
  }
}

new ClientsManager();

export default ClientsManager;
