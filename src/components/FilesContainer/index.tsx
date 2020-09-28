import React from 'react'
import { propEq, omit } from 'ramda'
import { useSelector } from 'react-redux'
import { State } from '../../reducers'
import { IFileSystem } from '../../reducers/FileSystem'
// import { Droppable } from 'react-beautiful-dnd'

const FilesContainer = (props: {
	systemPath: string
	droppableId: string
	// children: (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => React.ReactElement<HTMLElement>
}) => {
	const Empty = Symbol()
	const findWith = (predicate: any, transform: any, [first = Empty, ...rest]: any): any => {
		return first === Empty
			? null
			: predicate(first)
			? transform(first)
			: findWith(predicate, transform, first.files) || findWith(predicate, transform, rest)
	}
	const findById = (path: string, arr: IFileSystem) => findWith(propEq('path', path), omit(['files']), arr)
	const data = useSelector<State, IFileSystem>((state) => {
		return findById(props.systemPath, state.fileSystem)
	})
	return <div style={{ color: '#fff' }}>{JSON.stringify(data)}</div>
}
export default FilesContainer
