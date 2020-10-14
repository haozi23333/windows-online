import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'

import FileOrFolderClickableBox from '@/components/FilesContainer/FileOrFolderClickableBox'
import WindowsIcon from '@/components/WindowsIcon'
import { useFileIsChecked } from '@/hooks/fileHooks'
import { IFolder } from '@/redux/FileSystem/type'
import { UPDATE_CHECKED_FILE_WITH_FILEPATH } from '@/redux/types'

import '../File/index.scoped.less'
import './index.scoped.less'

type IFolderProps = {
	folder: IFolder
	parentPath: string
}

const Folder = forwardRef<HTMLDivElement, IFolderProps>((props, ref) => {
	const { folder, parentPath, ...rest } = props
	const dispatch = useDispatch()
	const isChecked = useFileIsChecked(parentPath, folder.path)
	return (
		<FileOrFolderClickableBox
			{...rest}
			ref={ref}
			onClick={() => {
				dispatch({
					type: UPDATE_CHECKED_FILE_WITH_FILEPATH,
					path: props.parentPath,
					file: folder.path
				})
			}}
			onDoubleClick={(event) => {
				console.log(event)
			}}
			className={['folder', 'file', isChecked ? 'checked' : ''].join(' ')}
		>
			<div className={'file-icon'}>
				<WindowsIcon icon={folder.icon} />
			</div>
			<div className={'file-name file-default-hidden-text'}>{folder.name}</div>
		</FileOrFolderClickableBox>
	)
})

export default Folder
