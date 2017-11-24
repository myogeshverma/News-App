import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { news, newsIsLoading } from './news';
export default combineReducers({
    news,
    newsIsLoading,
    router: routerReducer
});