import { combineReducers } from "redux";
///리듀서들을 묶는법
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";

///리듀서들을 묶는법
export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
  ///객체로 받기떄문에 키 값을 지정해줘야한다.
});
