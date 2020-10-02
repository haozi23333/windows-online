import React from 'react'
import './index.scoped.less'

export type IWindowsIconType = 'bin' | 'full-bin' | 'folder'

export const WINDOWS_ICON_TYPE: {
	[key: string]: IWindowsIconType
} = {
	BIN: 'bin',
	FULL_BIN: 'full-bin',
	FOLDER: 'folder'
}

const WindowsIcon = (props: { icon: IWindowsIconType | string }) => {
	return (
		<img
			data-icon_name={props.icon}
			className={'windows-icon windows-icon-' + props.icon}
			src={`https://oss.yangger.cn/assets/windows/windows-icon/${props.icon}.png`}
			alt={props.icon}
		/>
	)
}
export default WindowsIcon
