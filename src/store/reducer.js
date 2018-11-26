
import { combineReducers } from 'redux';
import {reducer as movieReducer} from '../home/store';
const reducer =combineReducers({
 
  Movies:movieReducer,

})

export default reducer;