import {
    INCREMENT
} from './types';


export const incrementCount = (data) => {
    return {
        type: INCREMENT,
        payload: data
    }
}