import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { IFile } from '../../reducers/FileSystem/type'
import WindowsIcon from '../../components/WindowsIcon'
import { UPDATE_CHECKED_FILES_WITH_FILEPATH } from '../../reducers/types'
import './index.scoped.less'
import { useFileIsChecked } from '../../hooks/fileHooks'

type IFileProps = { file: IFile; parentPath: string }

const File = forwardRef<HTMLDivElement, IFileProps>((props, ref) => {
	const file = props.file
	const dispatch = useDispatch()
	const isChecked = useFileIsChecked(props.parentPath, file.path)
	return (
		<div
			ref={ref}
			onClick={(e) => {
				e.stopPropagation()
				dispatch({
					type: UPDATE_CHECKED_FILES_WITH_FILEPATH,
					path: props.parentPath,
					files: [file.path]
				})
			}}
			className={['file', isChecked ? 'checked' : ''].join(' ')}
		>
			<div className={'file-icon'}>
				<WindowsIcon icon={file.icon} />
			</div>
			<div className={'file-name file-default-hidden-text'}>{file.name}</div>
		</div>
	)
})

export default File
