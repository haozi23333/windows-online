import { IFileSystem, IFolder } from '../reducers/FileSystem'
import { pick, propEq } from 'ramda'
import { useSelector } from 'react-redux'
import { State } from '../reducers'
import { useEffect, useState } from 'react'

const useFilesWithPath = (findPath: string): IFolder => {
	const fileSystem = useSelector<State, IFileSystem>((state) => state.fileSystem)
	const [files, updateFiles] = useState<any>({
		files: []
	})
	useEffect(() => {
		const Empty = Symbol()
		const findWith = (predicate: any, transform: any, [first = Empty, ...rest]: any): any => {
			return first === Empty
				? null
				: predicate(first)
				? transform(first)
				: findWith(predicate, transform, first.files) || findWith(predicate, transform, rest)
		}
		const findById = (path: string, arr: IFileSystem) => findWith(propEq('path', path), pick(['files']), arr)
		updateFiles(findById(findPath, fileSystem))
	}, [fileSystem])
	return files
}
export { useFilesWithPath }
