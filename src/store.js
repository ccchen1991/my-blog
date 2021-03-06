import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import blogReducer from './reducers/blogReducer';

const reducer = combineReducers({
    blogReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;