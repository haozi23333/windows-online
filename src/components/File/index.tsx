import React from 'react'
import { IFile } from '../../reducers/FileSystem'
import WindowsIcon from '../../components/WindowsIcon'
import './index.scoped.less'

const File = (props: { file: IFile }) => {
	const file = props.file
	return (
		<div className={'file'}>
			<div className={'file-icon'}>
				<WindowsIcon icon={file.icon} />
			</div>
			<div className={'file-name default-hidden'}>{file.name}</div>
		</div>
	)
}

export default File
