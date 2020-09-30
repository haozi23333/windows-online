import { IFolder } from '../reducers/FileSystem/type'
import { pick, propEq } from 'ramda'
import { useSelector } from 'react-redux'
import { IOsState } from '../reducers'
import { useEffect, useState } from 'react'

/**
 * @description use folder path select files
 * @param findPath
 * @return IFolder
 */
const useFilesWithPath = (findPath: string): IFolder => {
	const systemFiles = useSelector<IOsState, IFolder[]>((state) => state.fileSystem.files)
	const [files, updateFiles] = useState<
		| IFolder
		| {
				files: []
		  }
	>({
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
		const findById = (path: string, arr: IFolder[]) => findWith(propEq('path', path), pick(['files']), arr)
		updateFiles(findById(findPath, systemFiles))
	}, [systemFiles])
	return files as IFolder
}

/**
 * @description check file is checked
 * @param parentFilePath
 * @param filePath
 * @return boolean
 */
const useFileIsChecked = (parentFilePath: string, filePath: string): boolean => {
	const [isChecked, updateStatus] = useState(false)
	const checkFilePaths = useSelector<IOsState, string[]>(
		(state) => state.fileSystem.checkFilePaths[parentFilePath] || []
	)
	useEffect(() => {
		updateStatus(checkFilePaths.includes(filePath))
	}, [checkFilePaths])
	return isChecked
}

export { useFilesWithPath, useFileIsChecked }
