import { WINDOWS_ICON_TYPE } from '../../components/WindowsIcon'
import { IFileSystemState } from './type'

export default {
	files: [
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
						},
						{
							path: '/Desktop/folderTest',
							name: 'folderTest',
							icon: WINDOWS_ICON_TYPE.FOLDER,
							createDate: new Date(),
							isFolder: true,
							protect: false,
							files: []
						}
					]
				}
			]
		}
	],
	indexed: {},
	checkFilePaths: {},
	currentFilePath: '/Desktop'
} as IFileSystemState
