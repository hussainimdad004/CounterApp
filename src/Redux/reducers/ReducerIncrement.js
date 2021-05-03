import {
    INCREMENT
} from '../actions/types';

const INITIAL_STATE = {
    increment: 0
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state,
                increment: action.payload
            }

        default:
            return state;
    }
}