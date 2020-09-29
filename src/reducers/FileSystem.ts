import { Action } from 'redux'
import { WINDOWS_ICON_TYPE } from '../components/WindowsIcon'

type IBaseFileInfo = {
	name: string
	icon: string
	creator?: string
	createDate: Date
	updateDate?: Date
	path: string
	openPath?: string
	protect?: boolean
	isFolder: boolean
}

export type IFile = {
	type: 'text' | 'app'
} & IBaseFileInfo

export type IFolder = {
	isFolder: boolean
	files: (IFile | IFolder)[]
} & IBaseFileInfo

export type IFileSystem = (IFile | IFolder)[]

const DEFAULT_FILE_SYSTEM = [
	{
		path: '/',
		name: 'root',
		icon: WINDOWS_ICON_TYPE.FOLDER,
		createDate: new Date(),
		isFolder: true,
		protect: true,
		files: [
			{
				path: '/Desktop',
				name: 'Desktop',
				icon: WINDOWS_ICON_TYPE.FOLDER,
				createDate: new Date(),
				isFolder: true,
				protect: true,
				files: [
					{
						type: 'app',
						path: '/Desktop/bin',
						name: 'bin',
						icon: WINDOWS_ICON_TYPE.BIN,
						createDate: new Date(),
						isFolder: false,
						protect: true
					}
				]
			}
		]
	}
] as IFileSystem

const fileSystemReducer = (state: IFileSystem = DEFAULT_FILE_SYSTEM, action: Action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state
		default:
			return state
	}
}

export default fileSystemReducer
