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
							name:
								'binbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbinbin',
							icon: WINDOWS_ICON_TYPE.BIN,
							createDate: new Date(),
							isFolder: false,
							protect: true
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
