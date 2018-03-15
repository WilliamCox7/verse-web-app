import { combineReducers } from 'redux';
import scripture from './reducers/scripture';
import nav from './reducers/nav';

/**
 * combines all reducers into state
 */

export default combineReducers({
  scripture, nav
});
