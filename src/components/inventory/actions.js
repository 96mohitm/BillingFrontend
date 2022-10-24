import InventoryService from "./InventoryService";

export const GET_INVENTORY = "inventory/getList";

export const getInventoryList = async (dispatch) => {
  try {
    const res = await InventoryService.getAll();
    dispatch({
      type: GET_INVENTORY,
      payload: res.data.inventory,
    });
  } catch (err) {
    console.log(err);
  }
};
