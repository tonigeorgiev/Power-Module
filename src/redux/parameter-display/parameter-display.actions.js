import * as types from "./parameter-display.types"

export const modifyVoltageOBC = () => {
    return {
        type: types.MODIFY_VOLTAGE_OBC
    }
}
export const modifyVoltageCamera = () => {
    return {
        type: types.MODIFY_VOLTAGE_CAMERA
    }
}
export const modifyDrawOBC = () => {
    return {
        type: types.MODIFY_DRAW_OBC
    }
}
export const modifyDrawCamera = () => {
    return {
        type: types.MODIFY_DRAW_CAMERA
    }
}
export const manipulateDrawOBC = () => {
    return {
        type: types.MANIPULATE_DRAW_OBC
    };
};
export const manipulateDrawCamera = () => {
    return {
        type: types.MANIPULATE_DRAW_CAMERA
    };
};