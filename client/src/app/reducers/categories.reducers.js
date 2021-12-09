import {GET_CATEGORIES,CATEGORY_ERROR,CATEGORY_LOADING} from "../constants/types";

const initialState = {
    categories: [],
    loading:true,
    error: {},
    category: null,
};
 export default function (state=initialState, action){
     const {type,payload} = action ;
     switch (type) {
         case GET_CATEGORIES:
             return{
                 ...state,
                 categories: payload.categories,
                 loading: false,
             };
             case CATEGORY_ERROR:
                 return{
                     ...state,
                     loading: false,
                     error: payload.error,
                 };
                 case CATEGORY_LOADING:
                     return{
                         ...state,
                         loading:true,
                     };
     
         default:
             return state;
     }
 }