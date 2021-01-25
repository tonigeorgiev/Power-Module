import * as types from "./parameter-display.types"

const INITIAL_STATE = {
    batteryVoltageOBC: 30,
    batteryVoltageCamera: 30,
    batteryDrawOBC: 1.5,
    batteryDrawCamera: 1,
    isConnectedOBC: true,
    isConnectedCamera: true, 
};

const parameterDisplayReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.MODIFY_VOLTAGE_OBC:
            let modifyVoltageOBC = 1 - state.batteryDrawOBC;
            if(state.batteryVoltageOBC + modifyVoltageOBC <= 0) return {...state, batteryVoltageOBC: 0};
            if(state.batteryVoltageOBC + modifyVoltageOBC >= 30) return {...state, batteryVoltageOBC: 30};
            return {...state, batteryVoltageOBC: state.batteryVoltageOBC + modifyVoltageOBC}; 
        case types.MODIFY_VOLTAGE_CAMERA:
            let modifyVoltageCamera = 1 - state.batteryDrawCamera;
            if(state.batteryVoltageCamera + modifyVoltageCamera <= 0) return {...state, batteryVoltageCamera: 0};
            if(state.batteryVoltageCamera + modifyVoltageCamera >= 30) return {...state, batteryVoltageCamera: 30};
            return {...state, batteryVoltageCamera: state.batteryVoltageCamera + modifyVoltageCamera};
        case types.MODIFY_DRAW_OBC:
            if(state.isConnectedOBC) return {...state, batteryDrawOBC: state.batteryDrawOBC + 0.5};
            return state;
        case types.MODIFY_DRAW_CAMERA:
            if(state.isConnectedCamera) return {...state, batteryDrawCamera: state.batteryDrawCamera + 0.5};
            return state;
        case types.MANIPULATE_DRAW_OBC:
            if(state.isConnectedOBC) return {...state, isConnectedOBC: false, batteryDrawOBC: 0};
            return {...state, isConnectedOBC: true, batteryDrawOBC: 1.5};
        case types.MANIPULATE_DRAW_CAMERA:
            if(state.isConnectedCamera) return {...state, isConnectedCamera: false, batteryDrawCamera: 0};
            return {...state, isConnectedCamera: true, batteryDrawCamera: 1.5};
        default:
            return state
    }
}

export default parameterDisplayReducer