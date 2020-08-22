import { ACTION_TYPES } from "./constants";

const initReq = () => {
    return { type: ACTION_TYPES.BUTTON_CLICK, payload: "Hello" }
}
export default initReq;