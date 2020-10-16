type IProcessStatus = 0 | 1 | 2
export interface IProcess {
	name: string
	pid: number
	username: string
	netWork: number
	readonly status: IProcessStatus // 0 stop 1 running 2 No Response
	childProcess: Omit<IProcess, 'childProcess'>[]
}
export interface INetworkTask {
	appName: string
	host: string
	path: string
	responseCode: number
	method: string
	size: {
		request: number
		response: number
		total: number
	}
	timing: {
		requestStartDate: Date
		requestEndDate: Date
		responseStartDate: Date
		responseEndDate: Date
		duration: number
	}
	request: {
		[key: string]: any
	}
	response: any
}
export interface ITaskManager {
	Processes: {
		Apps: IProcess[]
		BackgroundProcesses: IProcess[]
		pid: number
	}
	Performance: {
		// https://developer.chrome.com/extensions/processes#method-getProcessInfo
		CPU: any // TODO only Chrome dev mode can develop
		Memory: any // TODO only Chrome dev mode can develop
		NetWork: INetworkTask[]
	}
}
