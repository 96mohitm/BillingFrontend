import http from "../../utils/http-common";

class ProductService {
  getAll() {
    return http.get("/product_list");
  }
}

export default new ProductService();
