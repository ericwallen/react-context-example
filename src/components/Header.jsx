
import React, {Component} from 'react';

import {Consumer} from '../App'

class Header extends Component {
	render(){
		return(
			<Consumer>
				{context => {
					return(
						<>
							<h1>I am Header {context.state.message}</h1>
						</>
					)
				}}
			</Consumer>
		)
	}
};

export default Header;