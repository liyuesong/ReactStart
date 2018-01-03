import React from 'react';
import ReactDOM from 'react-dom';

// Create a nve component. This component should produce some HTML
// const App = function() {
// 	return <div>Hi!</div>;
// }
const App = () => {
	return <div>Hi!</div>;
}

// Take this component's generated HTML and put is 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));