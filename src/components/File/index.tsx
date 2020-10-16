import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'

import FileOrFolderClickableBox from '@/components/FilesContainer/FileOrFolderClickableBox'
import WindowsIcon from '@/components/WindowsIcon'
import { useFileIsChecked } from '@/hooks/fileHooks'
import { IFile } from '@/redux/FileSystem/type'
import { ADD_PROCESS_WITH_APP, UPDATE_CHECKED_FILE_WITH_FILEPATH } from '@/redux/types'

import './index.scoped.less'

type IFileProps = { file: IFile; parentPath: string }

const File = forwardRef<HTMLDivElement, IFileProps>((props, ref) => {
	const { file, parentPath, ...rest } = props
	const dispatch = useDispatch()
	const isChecked = useFileIsChecked(parentPath, file.path)
	return (
		<FileOrFolderClickableBox
			ref={ref}
			{...rest}
			onClick={() => {
				// dispatch({ TODO mouseMove select
				// 	type: UPDATE_CHECKED_FILES_WITH_FILEPATH,
				// 	path: props.parentPath,
				// 	files: [file.path]
				// })
				dispatch({
					type: UPDATE_CHECKED_FILE_WITH_FILEPATH,
					path: props.parentPath,
					file: file.path
				})
			}}
			onDoubleClick={() => {
				if (file.type === 'text') {
					dispatch({
						type: ADD_PROCESS_WITH_APP,
						appName: 'fileEditor'
					})
				} else {
					dispatch({
						type: ADD_PROCESS_WITH_APP,
						appName: file.name
					})
				}
			}}
			className={['file', isChecked ? 'checked' : ''].join(' ')}
		>
			<div className={'file-icon'}>
				<WindowsIcon icon={file.icon} />
			</div>
			<div className={'file-name file-default-hidden-text'}>{file.name}</div>
		</FileOrFolderClickableBox>
	)
})

export default File
