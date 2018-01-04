import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCewAH3-E1HGPObX0RZMZpoTS-Gj2wkNJY';

// Create a nve component. This component should produce some HTML
// const App = function() {
// 	return <div>Hi!</div>;
// }
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this component's generated HTML and put is 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));