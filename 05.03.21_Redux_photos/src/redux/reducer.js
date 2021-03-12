import {combineReducers} from "redux";
import {apiReducer} from "./apiReducer";
import {loaderReducer} from "./loaderReducer";

export const reducer = combineReducers({
    api: apiReducer,
    loader: loaderReducer
})
