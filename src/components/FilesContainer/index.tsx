import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'

import { useFilesWithPath } from '@/hooks/fileHooks'
import { IFile, IFolder } from '@/redux/FileSystem/type'
import { CLEAR_CHECKED_FILES_WITH_FILEPATH } from '@/redux/types'

import File from '../File'
import Folder from '../Folder'
import './index.scoped.less'

const FilesContainer = (props: { folderPath: string }) => {
	const data = useFilesWithPath(props.folderPath)
	const dispatch = useDispatch()
	const isFolder = (FileOrFolder: IFile | IFolder): FileOrFolder is IFolder => {
		return (FileOrFolder as IFolder).isFolder
	}
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
										if (isFolder(fileOrFolder)) {
											return (
												<Folder
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}
													parentPath={props.folderPath}
													folder={fileOrFolder}
												/>
											)
										} else {
											return (
												<File
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													ref={provided.innerRef}
													parentPath={props.folderPath}
													file={fileOrFolder}
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
