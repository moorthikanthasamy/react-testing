import { ACTION_TYPES } from "./constants";

const initialState = {
    appName: "React-Testing"
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.BUTTON_CLICK:
            state = { appName: action.payload }
            break;
        case ACTION_TYPES.MIDDLEWARE_CHANGES:
            state = { appName: action.payload }
            break;
        default:
            return state;
    }
    return state;
}
export default rootReducer; 