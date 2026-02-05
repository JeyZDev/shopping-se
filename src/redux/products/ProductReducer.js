import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./ActionTypes";
import { initialState } from "./InitialState";

const nextId = (items) => {
  return (
    items.reduce((maxId, item) => {
      const id = Number(item.id);
      return Number.isNaN(id) ? maxId : Math.max(maxId, id);
    }, -1) + 1
  );
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return [...state, {id: nextId(state), ...action.payload, price: parseFloat(action.payload.price), quantity: parseInt(action.payload.quantity)}]
      case ADD_QUANTITY:
        return state.map((product) => {
            if(product.id == action.payload.productId) {
                return {
                    ...product,
                    quantity: product.quantity + action.payload.quantity
                }
            }else{
                return product;
            }
        });
      case REMOVE_QUANTITY:
        return state.map((product) => {
          // console.log("CHECK:", product.quantity - 1);
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        });
      default:
        return state;
    }
}

export default ProductReducer;