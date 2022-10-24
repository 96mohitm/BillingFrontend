import http from "../../utils/http-common";


class BillingService {
  getAll() {
    return http.get("/order_list");
  }
}

export default new BillingService();
