import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./ActionTypes";
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const addQuantity = (productId, quantity) => {
  return {
    type: ADD_QUANTITY,
    payload: {
      productId: productId,
      quantity: quantity,
    },
  };
};

export const removeQuantity = (productId) => {
  return {
    type: REMOVE_QUANTITY,
    payload: productId,
  };
};