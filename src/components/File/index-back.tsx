import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { IFile } from '../../reducers/FileSystem/type'
import WindowsIcon from '../../components/WindowsIcon'
import { CHANGE_CURRENT_FILEPATH, UPDATE_CHECKED_FILES_WITH_FILEPATH } from '../../reducers/types'
import './index.scoped.less'
import { useFileIsChecked } from '../../hooks/fileHooks'

const File = (props: { file: IFile; parentPath: string; index?: number }) => {
	const file = props.file
	const dispatch = useDispatch()
	const isChecked = useFileIsChecked(props.parentPath, file.path)
	return (
		<Draggable draggableId={file.path} key={file.path} index={props.index || 0}>
			{(provided, snapshot) => {
				return (
					<div
						onClick={(e) => {
							e.stopPropagation()
							dispatch({
								type: UPDATE_CHECKED_FILES_WITH_FILEPATH,
								path: props.parentPath,
								files: [provided.draggableProps['data-rbd-draggable-id']]
							})
						}}
						className={['file', isChecked ? 'checked' : ''].join(' ')}
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<div className={'file-icon ' + snapshot.isDragging}>
							<WindowsIcon icon={file.icon} />
						</div>
						<div
							className={'file-name file-default-hidden-text'}
							onClick={() =>
								dispatch({
									type: CHANGE_CURRENT_FILEPATH,
									path: '/'
								})
							}
						>
							{file.name}
						</div>
					</div>
				)
			}}
		</Draggable>
	)
}

export default File
