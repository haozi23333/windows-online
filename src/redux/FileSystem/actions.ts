import { Action } from 'redux'

import {
	CHANGE_CURRENT_FILEPATH,
	CLEAR_CHECKED_FILES_WITH_FILEPATH,
	UPDATE_CHECKED_FILE_WITH_FILEPATH,
	UPDATE_CHECKED_FILES_WITH_FILEPATH
} from '../types'

export interface IChangeFilePathAction extends Action<typeof CHANGE_CURRENT_FILEPATH> {
	path: string
}

export interface IUpdateCheckedFilesWithPathAction extends Action<typeof UPDATE_CHECKED_FILES_WITH_FILEPATH> {
	path: string
	files: string[]
}
export interface IUpdateCheckedFileWithPathAction extends Action<typeof UPDATE_CHECKED_FILE_WITH_FILEPATH> {
	path: string
	file: string
}
export interface IClearFolderCheckedFile extends Action<typeof CLEAR_CHECKED_FILES_WITH_FILEPATH> {
	path: string
}

export type IFilesSystemActions =
	| IChangeFilePathAction
	| IUpdateCheckedFilesWithPathAction
	| IClearFolderCheckedFile
	| IUpdateCheckedFileWithPathAction
