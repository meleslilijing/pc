import rootReducer from '../reducer'
import { createStore, applyMiddleware, compose } from 'redux'

// import thunk from './middleware/thunk'
import DevTools from '../containers/DevTools'

import { reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'

/**
 * applyMiddleware : http://redux.js.org/docs/api/applyMiddleware.html
 */
// function enhancer( { getState } ) {
// 	return (next) => (action) => {
		
// 		console.log('will dispatch', action)

// 		let returnValue = next(action)

// 		return returnValue
// 	}
// }

// const enhancer = compose(
	// applyMiddleware(reduxReactRouter)(createHistory),
	// reduxReactRouter(createHistory), 
	// DevTools.instrument()
// )

// const Store = (function createStoreWithMiddleware (initialState) {
// 	return createStore(
// 		rootReducer, 
// 		initialState
// 	)
// })();

const Store  = compose(
	reduxReactRouter({ createHistory })
)(createStore)(rootReducer)

export default Store