import React from 'react'
import './index.less'
import { Resizable } from 're-resizable'

const TaskBar = () => {
	return (
		<Resizable
			className={'task-bar'}
			defaultSize={{
				width: '100%',
				height: 44
			}}
			minHeight={44}
			minWidth={'100%'}
		>
			<div className={'flex-box'}>
				<div className={'start-button global-hover-mask '}>
					<i
						className="iconfont icon-windows-10"
						style={{
							fontSize: '26px',
							color: '#fff'
						}}
					/>
				</div>
			</div>
		</Resizable>
	)
}

export default TaskBar
