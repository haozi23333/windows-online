interface IBaseFileInfo {
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

export interface IFile extends IBaseFileInfo {
	type: 'text' | 'app'
}

export interface IFolder extends IBaseFileInfo {
	isFolder: boolean
	files: (IFile | IFolder)[]
}

export interface IFileSystemState {
	files: IFolder[]
	indexed: {
		[key: string]: {
			index: string
			path: string
		}
	}
	checkFilePaths: {
		[key: string]: string[]
	}
	currentFilePath: string
}
