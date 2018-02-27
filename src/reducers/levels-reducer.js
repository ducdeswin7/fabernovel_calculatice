import { CHANGE_LEVEL } from '../action/actions'

export default function levelReducer(state = {}, { type, payload }) {

    switch (type) {
        case CHANGE_LEVEL:
            return payload.level;
        default:
            return state;
    }
}