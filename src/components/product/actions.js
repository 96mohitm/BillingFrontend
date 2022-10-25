import ProductService from "./ProductService";

export const GET_PRODUCT_LIST = "product/getList";

export const getProductList = async (dispatch) => {
  try {
    const res = await ProductService.getAll();
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: res.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};
