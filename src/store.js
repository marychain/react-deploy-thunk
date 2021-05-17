import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { UserReducer } from "./redux/user-reducer";
import { AddUserReducer } from "./redux/addUser-reducer";


const reducer = combineReducers({
    UserReducer,
    AddUserReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
