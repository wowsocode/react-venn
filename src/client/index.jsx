import React from 'react'
import ReactDOM from 'react-dom'
import Venn from './venn'

class App extends React.Component {
	constructor() {
		super()
		this.vennData = [ 
            {sets: ['A'], size: 12}, 
            {sets: ['B'], size: 12},
            {sets: ['A','B'], size: 2}
        ]
	}

	render() {
		return(
			<div>
				<Venn data={this.vennData} />
			</div>
		)
	}
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)