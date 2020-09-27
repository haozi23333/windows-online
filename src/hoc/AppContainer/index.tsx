import React from 'react'

const AppContainer = (Component: () => JSX.Element) => (props: any) => {
	return (
		<div className={'app-container'}>
			<Component {...props} />
		</div>
	)
}

export default AppContainer
