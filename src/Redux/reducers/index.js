import {
    combineReducers
} from 'redux';
import Increment from "./ReducerIncrement";
const combinedReducer = combineReducers({
    Increment: Increment
});
const rootReducer = (state, action) => {
    return combinedReducer(state, action);
}
export default rootReducer;