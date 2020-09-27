import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import './index.less'
import wallpaper from '../../assets/images/wallpaper.png'
import TaskBar from '../../osComponents/TaskBar'
import FilesContainer from '../../components/FilesContainer'

const Index = () => {
	return (
		<div className={'desktop'}>
			<div className={'background'}>
				<img src={wallpaper} alt="background" />
			</div>
			<div className={'app-container'}>
				<DragDropContext
					onDragEnd={(...args) => {
						console.log(args)
					}}
				>
					<FilesContainer droppableId={'desktop-app'} systemPath={'/Desktop'} />
				</DragDropContext>
			</div>
			<TaskBar />
		</div>
	)
}

export default Index
