import React from 'react'

export type IWindowsIconType = 'bin' | 'full-bin' | 'folder'

export const WINDOWS_ICON_TYPE: {
	[key: string]: IWindowsIconType
} = {
	BIN: 'bin',
	FULL_BIN: 'full-bin',
	FOLDER: 'folder'
}

const WindowsIcon = (props: { icon: IWindowsIconType | string }) => {
	return <img src={`https://oss.yangger.cn/assets/windows/icons/${props.icon}.png`} alt={props.icon} />
}
export default WindowsIcon
