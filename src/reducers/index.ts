import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import counterReducer from './counter'

import fileSystemReducer, { IFileSystem } from 'src/reducers/IFileSystem'

const rootReducer = (history: History) =>
	combineReducers({
		fileSystem: fileSystemReducer,
		count: counterReducer,
		router: connectRouter(history)
	})

export interface State {
	fileSystem: IFileSystem
	count: number
	router: RouterState
}

export default rootReducer
