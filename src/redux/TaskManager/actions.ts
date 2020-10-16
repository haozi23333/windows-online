import { Action } from 'redux'

import { ADD_PROCESS_WITH_APP } from '@/redux/types'

export interface IRunApplication extends Action<typeof ADD_PROCESS_WITH_APP> {
	appName: string
}

export type ITaskManagerAction = IRunApplication
