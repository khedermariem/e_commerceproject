import { LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTER_EURROE,
    REGISTER_SUCCESS,
    AUTH_ERROR,
   AUTH_LOADING, 
    LOGOUT
       } 
    from "../constants/types";
const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: null,
    user: null,
    err: {},
};
export default function (state = initialState, action){
    const {type,payload} = action ;
    switch (type) {
        case AUTH_LOADING:
			return {
				...state,
				loading: true,
			};
        case LOGIN_SUCCESS :
            localStorage.setItem("token",payload.token);
            return{
                ...state,
                user: payload.user,
                token: payload.token,
                isAuthenticated: true,
                loading: false,
            };
          
                case REGISTER_SUCCESS:
                    localStorage.setItem("token",payload.token);
                    return{
                        ...state,
                       
                        loading: false,
        
                    };
                    case REGISTER_EURROE :
                        case LOGOUT:
                  case AUTH_ERROR:
                      case LOGIN_ERROR:
                        localStorage.removeItem("token");
                        return{
                            ...state,
                            isAuthenticated: false,
                            token: null,
                            loading: false,
                            err:payload,
                        }
           
    
        default:
            return state;
        
            
    }
}