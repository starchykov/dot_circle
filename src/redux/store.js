import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./rootReducer";
// Crete store object
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;

// Define store as window global object for debugging
window.store = store;
