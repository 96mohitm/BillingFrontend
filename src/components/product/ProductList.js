import axios from "axios";
import React, { useEffect, useState } from "react";
import { localhostURL } from "../../constants";

const ProductList = () => {
  const [productList, setproductList] = useState([])

  const getProductList = () => {
    const productListPath = 'product_list';
    axios.get(localhostURL + productListPath)
      .then((res) => {
        console.log(res.data.products);
        setproductList(res.data.products);
      })
  };
  
  useEffect(() => {
    getProductList();
  }, []);

  const getTableBody = () => {
    return (
      productList.map((product, index) => {
        return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.created_ts}</td>
          <td>{product.unit}</td>
        </tr>
        );
      })
    );
  };

  return (
    <div>
        <h2>Product List</h2>
        <button type="button" class="btn btn-primary" onClick={() => getProductList()}>Refresh</button>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Created Date</th>
            <th scope="col">Unit</th>
          </tr>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
        </table>
    </div>
  )
}

export default ProductList