import { combineReducers } from 'redux';
import routes from './routes';
import articles from './articles';

export default combineReducers({
  routes: routes,
  articles: articles
});