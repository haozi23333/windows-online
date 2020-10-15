import { symmetricDifference, equals } from 'ramda'
import { Reducer } from 'redux'

import {
	CHANGE_CURRENT_FILEPATH,
	CLEAR_CHECKED_FILES_WITH_FILEPATH,
	UPDATE_CHECKED_FILE_WITH_FILEPATH,
	UPDATE_CHECKED_FILES_WITH_FILEPATH
} from '../types'
import { IFilesSystemActions } from './actions'
import initialFileSystemState from './state'
import { IFileSystemState } from './type'

const fileSystemReducer: Reducer<IFileSystemState, IFilesSystemActions> = (state = initialFileSystemState, action) => {
	switch (action.type) {
		case CHANGE_CURRENT_FILEPATH:
			state.currentFilePath = action.path
			return state
		case UPDATE_CHECKED_FILES_WITH_FILEPATH:
			const pathCheckedFiles = state.checkFilePaths[action.path]
			if (!pathCheckedFiles) {
				state.checkFilePaths[action.path] = symmetricDifference(action.files, [])
			} else {
				state.checkFilePaths[action.path] = symmetricDifference(action.files, pathCheckedFiles)
			}
			return state
		case UPDATE_CHECKED_FILE_WITH_FILEPATH:
			state.checkFilePaths[action.path] = equals([action.file], state.checkFilePaths[action.path])
				? []
				: [action.file]
			return state
		case CLEAR_CHECKED_FILES_WITH_FILEPATH:
			state.checkFilePaths[action.path] = []
			return state
		default:
			return state
	}
}
export default fileSystemReducer
