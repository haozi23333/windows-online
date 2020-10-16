import { History } from 'history'
import { combineReducers } from 'redux'

import { RouterState, connectRouter } from 'connected-react-router'

import fileSystemReducer from './FileSystem'
import { IFileSystemState } from './FileSystem/type'
import taskManagerReducer from './TaskManager'
import { ITaskManager } from './TaskManager/type'

const rootReducer = (history: History) =>
	combineReducers({
		fileSystem: fileSystemReducer,
		taskManager: taskManagerReducer,
		router: connectRouter(history)
	})
export interface IOsState {
	readonly fileSystem: IFileSystemState
	readonly taskManager: ITaskManager
	readonly router: RouterState
}

export default rootReducer
