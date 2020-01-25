import { Action, Dispatch, Middleware, MiddlewareAPI } from 'redux'
const logger: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
  console.group(action.type)
  console.info('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()

  return result
}

export default logger