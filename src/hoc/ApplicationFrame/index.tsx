import React from 'react'

const ApplicationFrame = (Component: () => JSX.Element) => (props: any) => {
	return (
		<div className={'application-frame'}>
			<div className={'application-top-bar'}>
				<div className={'application-name'}>{props.applicationName}</div>
			</div>
			<Component {...props} />
		</div>
	)
}
export default ApplicationFrame
