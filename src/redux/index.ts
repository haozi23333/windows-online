import { combineReducers } from 'redux'
import { History } from 'history'
import { RouterState, connectRouter } from 'connected-react-router'
import fileSystemReducer from './FileSystem'
import { IFileSystemState } from './FileSystem/type'

const rootReducer = (history: History) =>
	combineReducers({
		fileSystem: fileSystemReducer,
		router: connectRouter(history)
	})
export interface IOsState {
	readonly fileSystem: IFileSystemState
	readonly router: RouterState
}

export default rootReducer
