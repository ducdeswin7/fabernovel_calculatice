import { CHANGE_LEVEL } from '../action/actions'

export default function levelReducer(state = {}, { type, payload }) {

    switch (type) {
        case CHANGE_LEVEL:
            state.forEach((item) => {
                return (item.name === payload.level.name) ? item.isActive = true : item.isActive = false ;
            });

            return state;
        default:
            return state;
    }
}