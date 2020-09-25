import React from 'react'
import { Route, Switch } from 'react-router'
import Hello from '../components/Hello'
import Counter from '../components/Counter'
import NoMatch from '../components/NoMatch'
import Desktop from '../pages/Desktop/'

const routes = (
	<Switch>
		<Route exact path="/" component={Desktop} />
		<Route path="/hello" component={Hello} />
		<Route path="/counter" component={Counter} />
		<Route component={NoMatch} />
	</Switch>
)

export default routes
