import {MANIPULATE_CONNECTION_OBC, MANIPULATE_CONNECTION_CAMERA} from "./commanding-panel.types"

const INITIAL_STATE = {
    buttonNameOBC: "Disconnect",
    buttonNameCamera: "Disconnect"
};

const commandingPanelReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MANIPULATE_CONNECTION_OBC:
            if(state.buttonNameOBC === "Disconnect") return {...state, buttonNameOBC: "Reconnect"}
            return {...state, buttonNameOBC: "Disconnect"}
        case MANIPULATE_CONNECTION_CAMERA:
            if(state.buttonNameCamera === "Disconnect") return {...state, buttonNameCamera: "Reconnect"}
            return {...state, buttonNameCamera: "Disconnect"}
        default:
            return state
    }
}

export default commandingPanelReducer