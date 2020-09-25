import React from 'react'

const BaseContainer = (Component: any) => (props: any) => {
	return (
		<div className={'Box'}>
			<div>base</div>
			<Component {...props} />
		</div>
	)
}

export default BaseContainer
