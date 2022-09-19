import { ADD_ITEM_TO_CART, CLEAR_CART, DELETE_ITEM_FROM_CART } from "./actions";

export const ShoppingReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_ITEM_TO_CART: {
      const { name, count } = payload;

      const isInCart = state.cart.find((item) => item.name === name);

      let newCart = isInCart
        ? state.cart.map((item) => {
            if (item.name === name) {
              console.log(item.count, count);
              item.count += count;
            }
            return item;
          })
        : [payload, ...state.cart];

      return {
        ...state,
        cart: newCart,
      };
    }
    case DELETE_ITEM_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item !== payload),
      };
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};
