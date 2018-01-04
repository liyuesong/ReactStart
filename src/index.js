import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCewAH3-E1HGPObX0RZMZpoTS-Gj2wkNJY';
// YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
//     // call back function
//     console.log(data);
// });

// Create a nve component. This component should produce some HTML
// const App = function() {
// 	return <div>Hi!</div>;
// }
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
        	videos: [],
        	selectedVideo: null
        };

        // a default search
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
    	YTSearch({ key: API_KEY, term: term }, (videos) => {
        	// call back function
            // this.setState({ videos }); // == this.setState({ videos: videos });
            this.setState({
            	videos: videos,
            	selectedVideo: videos[0]
            })
        });
    }

    render() {
    	// throttling search term input
    	const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return ( 
        	<div>
            	<SearchBar onSearchTermChange={ videoSearch }/>
            	<VideoDetail video={this.state.selectedVideo}/>
            	<VideoList 
            		onVideoSelect = { (selectedVideo) => this.setState({selectedVideo}) }
            		videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put is 
// on the page (in the DOM)
ReactDOM.render( < App / > , document.querySelector('.container'));