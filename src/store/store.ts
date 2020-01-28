import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from './rootReducer'
import logger from './middleware/logger';
const middleware = applyMiddleware(logger, thunk)

export default createStore(rootReducer, middleware);
