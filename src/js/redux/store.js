import {combineReducers, createStore} from "redux";
import signUpReducer from "./signUpReducer";
import signInReducer from "./signInReducer";

const rootReducer = combineReducers({
    signup: signUpReducer,
    signin: signInReducer
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;