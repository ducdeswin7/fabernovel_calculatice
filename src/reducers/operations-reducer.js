import { CHANGE_OPERATION_TYPE } from '../action/actions'

export default function operationReducer(state = {}, { type, payload }) {

    switch (type) {
        case CHANGE_OPERATION_TYPE:
            console.log('set new Operation type ==>', payload.operation.name);
            console.log('set new Operation state ==>', state);

            state.forEach((item) => {
                return (item.name === payload.operation.name) ? item.isActive = true : item.isActive = false ;
            });

            return state;
        default:
            return state;
    }
}