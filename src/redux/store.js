import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

let store = createStore(rootReducer, applyMiddleware(thunk));
///reducer를 묶어서 받는 방법 (rootReducer = 리듀서폴더안의 index.js)

export default store;
