import todo_Reducer from "./Todo_reducer";
import { combineReducers } from "redux"

const rootReducer = combineReducers(
    {
        todo_Reducer
    }
);

export default rootReducer;