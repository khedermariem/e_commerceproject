import { applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import rootReducre from './app/reducers';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
const initialState = {};
const middelware = [thunk];
export const store = createStore (
    rootReducre,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
);

