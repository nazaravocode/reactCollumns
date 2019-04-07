import { combineReducers } from 'redux';

import columnReducer from './column';

export default combineReducers({
	columnState: columnReducer,

});
