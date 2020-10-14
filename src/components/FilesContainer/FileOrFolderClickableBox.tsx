import React, { forwardRef } from 'react'

import '@/components/File/index.scoped.less'
import useClickPreventionOnDoubleClick from '@/hooks/useClickPreventionOnDoubleClick'

type IFileOrFolderClickableBoxProps = {
	onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	onDoubleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	children: any
	className: string
}
const FileOrFolderClickableBox = forwardRef<HTMLDivElement, IFileOrFolderClickableBoxProps>((props, ref) => {
	const { onClick, onDoubleClick, children, className, ...rest } = props
	const [handleClick, handleDoubleClick] = useClickPreventionOnDoubleClick(onClick, onDoubleClick)
	return (
		<div
			{...rest}
			ref={ref}
			onClick={(e) => {
				e.stopPropagation()
				return handleClick(e)
			}}
			onDoubleClick={(e) => {
				e.stopPropagation()
				return handleDoubleClick(e)
			}}
			className={className}
		>
			{children}
		</div>
	)
})
export default FileOrFolderClickableBox
