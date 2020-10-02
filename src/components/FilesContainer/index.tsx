import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import Folder from '../Folder'
import File from '../File'
import { IFile, IFolder } from '../../reducers/FileSystem/type'
import { useFilesWithPath } from '../../hooks/fileHooks'
import { useDispatch } from 'react-redux'
import './index.scoped.less'
import { CLEAR_CHECKED_FILES_WITH_FILEPATH } from '../../reducers/types'

const FilesContainer = (props: { folderPath: string }) => {
	const data = useFilesWithPath(props.folderPath)
	const dispatch = useDispatch()
	return (
		<Droppable droppableId={props.folderPath}>
			{(provided, snapshot) => {
				console.log(snapshot)
				console.log(useDispatch)
				return (
					<div
						ref={provided.innerRef}
						onClick={() => {
							dispatch({
								type: CLEAR_CHECKED_FILES_WITH_FILEPATH,
								path: props.folderPath
							})
						}}
						className={'file-container'}
					>
						{data.files.map((fileOrFolder, index) => {
							return (
								<Draggable draggableId={fileOrFolder.path} key={fileOrFolder.path} index={index}>
									{(provided) => {
										if (fileOrFolder.isFolder) {
											return (
												<Folder
													ref={provided.innerRef}
													parentPath={props.folderPath}
													folder={fileOrFolder as IFolder}
												/>
											)
										} else {
											return (
												<File
													ref={provided.innerRef}
													parentPath={props.folderPath}
													file={fileOrFolder as IFile}
												/>
											)
										}
									}}
								</Draggable>
							)
						})}
						{provided.placeholder}
					</div>
				)
			}}
		</Droppable>
	)
}
export default FilesContainer
