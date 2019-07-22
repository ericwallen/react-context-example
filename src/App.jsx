import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

var Context = React.createContext();

export const Consumer = Context.Consumer

class Provider extends Component {
	state = {
		message: `It's a nice day`,
		temp: 73
	}

	render(){
		return(
			<Context.Provider value={{
				state: this.state,
				handleInputChange: (e) => {
					const {name, value} = e.target;
					this.setState({
						[name]: value
					})
				}
			}}>
				{this.props.children}
			</Context.Provider>
		)
	}
}


class App extends Component {
	render(){
		return (
			<Provider>
				<Context.Consumer>
					{context => {
						return(
							<>
								<Header />
								<input type="text" name="message" onChange={context.handleInputChange}/>
							</>
						)
					}}
				</Context.Consumer>
			</Provider>
		  );
	}

}

export default App;
