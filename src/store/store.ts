import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// import reducers from './reducers'
import logger from './middleware/logger';
const middleware = applyMiddleware(logger, thunk)

// export default createStore(reducers, middleware);
export default createStore(middleware);

