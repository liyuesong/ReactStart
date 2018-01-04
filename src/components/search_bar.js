import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />;  // call React.createElement
// }

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	// // using error functions
	// render() {
	// 	return (
	// 		<div className="search-bar">
	// 			<input 
	// 			value={this.state.term}
	// 			onChange={(event) => this.setState({ term: event.target.value})} />
	// 		</div>
	// 	);
	// }

	render() {
		return (
			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={(event) => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;