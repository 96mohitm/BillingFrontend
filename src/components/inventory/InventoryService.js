import http from "../../utils/http-common";

class InventoryService {
  getAll() {
    return http.get("/inventory_list");
  }
}

export default new InventoryService();
