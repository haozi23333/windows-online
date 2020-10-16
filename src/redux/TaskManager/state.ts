import { ITaskManager } from '@/redux/TaskManager/type'

export default {
	Processes: {
		Apps: [],
		BackgroundProcesses: [],
		pid: 0
	},
	Performance: {
		CPU: {},
		Memory: {},
		NetWork: []
	}
} as ITaskManager
