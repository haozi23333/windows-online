import React from 'react'
// import { Droppable } from 'react-beautiful-dnd'
import Folder from '../Folder'
import File from '../File'
import { IFile } from '../../reducers/FileSystem'
import { useFilesWithPath } from '../../hooks/fileHooks'
// import { Droppable } from 'react-beautiful-dnd'

const FilesContainer = (props: {
	systemPath: string
	droppableId: string
	// children: (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => React.ReactElement<HTMLElement>
}) => {
	const data = useFilesWithPath(props.systemPath)
	return (
		<div style={{ color: '#ffffff' }}>
			{data.files.map((fileOrFolder) => {
				if (fileOrFolder.isFolder) {
					return <Folder key={fileOrFolder.path}>{JSON.stringify(fileOrFolder)}</Folder>
				} else {
					return <File key={fileOrFolder.path} file={fileOrFolder as IFile} />
				}
			})}
		</div>
	)
}
export default FilesContainer
