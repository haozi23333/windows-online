import React from 'react'
import { Route, Switch } from 'react-router'
import NoMatch from '@/components/NoMatch'
import Desktop from '@/pages/Desktop/'

const routes = (
	<Switch>
		<Route exact path="/" component={Desktop} />
		<Route component={NoMatch} />
	</Switch>
)

export default routes
