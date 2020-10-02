import React, { forwardRef } from 'react'
import { IFolder } from '../../reducers/FileSystem/type'
import { UPDATE_CHECKED_FILES_WITH_FILEPATH } from '../../reducers/types'
import { useDispatch } from 'react-redux'
import WindowsIcon from '../../components/WindowsIcon'
import { useFileIsChecked } from '../../hooks/fileHooks'
import '../File/index.scoped.less'
import './index.scoped.less'

type IFolderProps = {
	folder: IFolder
	parentPath: string
}

const Folder = forwardRef<HTMLDivElement, IFolderProps>((props, ref) => {
	const folder = props.folder
	const dispatch = useDispatch()
	const isChecked = useFileIsChecked(props.parentPath, folder.path)
	return (
		<div
			ref={ref}
			onClick={(e) => {
				e.stopPropagation()
				dispatch({
					type: UPDATE_CHECKED_FILES_WITH_FILEPATH,
					path: props.parentPath,
					files: [folder.path]
				})
			}}
			className={['folder', 'file', isChecked ? 'checked' : ''].join(' ')}
		>
			<div className={'file-icon'}>
				<WindowsIcon icon={folder.icon} />
			</div>
			<div className={'file-name file-default-hidden-text'}>{folder.name}</div>
		</div>
	)
})

export default Folder
