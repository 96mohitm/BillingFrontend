import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { localhostURL } from '../../constants';

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([])

  const getInventoryList = () => {
    const inventoryListPath = 'inventory_list';
    axios.get(localhostURL + inventoryListPath)
      .then((res) => {
        console.log(res.data.inventory);
        setInventoryList(res.data.inventory);
      })
  };

  useEffect(() => {
    getInventoryList();
  }, []);

  const getTableBody = () => {
    return (
      inventoryList.map((inventory, index) => {
        return (
        <tr key={index}>
          <td>{inventory.id}</td>
          <td>{inventory.product_id}</td>
          <td>{inventory.batch_id}</td>
          <td>{inventory.created_dt}</td>
          <td>{inventory.quantity}</td>
          <td>{inventory.price_per_quantity}</td>
        </tr>
        );
      })
    );
  }

  return (
    <div>
        <h2>InventoryList</h2>
        <button type="button" class="btn btn-primary" onClick={() => getInventoryList()}>Refresh</button>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Product Id</th>
            <th scope="col">Batch Id</th>
            <th scope="col">Created Date</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price Per Quantity</th>
          </tr>
        </thead>
        <tbody>
          {getTableBody()}
        </tbody>
        </table>


    </div>
  )
}

export default InventoryList