import React from 'react'
import ReactDOM from 'react-dom'
import Venn from './venn'

class App extends React.Component {
	constructor() {
		super()

	}

	render() {
		return(
			<div>
				<Venn />
			</div>
		)
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)