import {
  PRODUCT_LOADING,
  GET_PRODUCT,
  PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_CATEGORY,
  CREATE_PRODUCT,
} from "../constants/types";
const initialState = {
  products: [],
  product: null,
  loading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload.product],
        loading: false,
      };
      case GET_PRODUCTS:
          return{
              ...state,
              loading: false,
              products: payload.products,
          };
          case GET_PRODUCT:
              return{
                  ...state,
                  loading: false,
                  product: payload.product,
              };
              case GET_PRODUCTS_CATEGORY: 
              return{
                  ...state,
                  loading: false,
                  products: payload.products,
              };
              case PRODUCT_ERROR:
                  return{
                      ...state,
                      loading: false,
                      error: payload,
                  };
                  case PRODUCT_LOADING:
                      return{
                          ...state,
                          loading: true,
                          
                      }
    default:
      return state;
  }
}
