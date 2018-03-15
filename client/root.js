import { combineReducers } from 'redux';
import scripture from './reducers/scripture';
import nav from './reducers/nav';
import user from './reducers/user';

/**
 * combines all reducers into state
 */

export default combineReducers({
  scripture, nav, user
});
