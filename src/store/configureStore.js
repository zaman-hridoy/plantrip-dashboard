import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({

});

const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
));

export default store;