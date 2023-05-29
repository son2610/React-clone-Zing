//gom tat ca cac reducer lai thanh 1

import  appReducer  from "./appReducer";
// combine: gom tat ca cac reducer lai thanh voi nhau
//apply su dung cac middleware cho redux
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    //đây là 1 dạng object gồm key và value.
    // app là key, appReducer là value, và là file appReducer.js
    app : appReducer,
})

export default rootReducer;