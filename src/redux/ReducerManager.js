import { combineReducers } from 'redux';
import SiderMenuReducer from './slices/SiderMenuSlice';

const combinedReducers = combineReducers({
    siderState: SiderMenuReducer,
});

export default combinedReducers;