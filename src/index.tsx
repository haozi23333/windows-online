import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore, { history } from './configureStore'
import Mouse from './osComponents/Mouse'

const store = configureStore()
const render = () => {
	const rootElement = document.getElementById('react-root')
	new Mouse(rootElement as HTMLElement)
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App history={history} />
			</Provider>
		</AppContainer>,
		rootElement
	)
}

render()

// Hot reloading
if (module.hot) {
	// Reload components
	module.hot.accept('./App', () => {
		render()
	})
}
