import { Reducer } from 'redux'

import { ITaskManagerAction } from '@/redux/TaskManager/actions'
import { IProcess, ITaskManager } from '@/redux/TaskManager/type'

import initialTaskManager from './state'

const taskManagerReducer: Reducer<ITaskManager, ITaskManagerAction> = (state = initialTaskManager, action) => {
	switch (action.type) {
		case 'ADD_PROCESS_WITH_APP':
			state.Processes.pid++
			const newProcess = {
				name: action.appName,
				pid: state.Processes.pid,
				username: 'yangger',
				netWork: 0,
				status: 1,
				childProcess: []
			} as IProcess
			state.Processes.Apps.push(newProcess)
			return state
		default:
			return state
	}
}
export default taskManagerReducer
