export const CHANGE_OPERATION_TYPE = 'change_operation_type';

export const CHANGE_LEVEL = 'change_level';

export const changeOperationType = (operation) => {
    return {
        type: CHANGE_OPERATION_TYPE,
        payload: {
            operation
        }
    }
};

export const changeLevel = (level) => {
    return {
        type: CHANGE_LEVEL,
        payload: {
            level
        }
    }
};