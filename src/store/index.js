import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

function customMiddleWare({ getState, dispatch }) {
    return function (next) {
        return function (action) {
            return next(action)
        }
    }
}
const store = createStore(rootReducer, composeWithDevTools(compose(applyMiddleware(customMiddleWare, thunk))));
export default store; 