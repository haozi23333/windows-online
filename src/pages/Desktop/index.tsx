import React from 'react'
import './index.less'
import wallpaper from '../../assets/images/wallpaper.png'
import TaskBar from '../../osComponents/TaskBar'

const Index = () => {
	return (
		<div className={'desktop'}>
			<div className={'background'}>
				<img src={wallpaper} alt="background" />
			</div>
			<TaskBar />
		</div>
	)
}

export default Index
