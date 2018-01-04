import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />;  // call React.createElement
// }

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	// using error functions
	render() {
		return (
			<div>
				<input 
				value={this.state.term}
				onChange={(event) => this.setState({ term: event.target.value})} />
			</div>
		);
	}

	/*// render() {
	// 	return <input onChange={this.onInputChange} />;
	// }

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }*/
}

export default SearchBar;