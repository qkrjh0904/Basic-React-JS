import React from 'react';
import Axios from 'axios';
// import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const movies = await Axios.get('https://yts.mx/api/v2/list_movies.json');
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading } = this.state;
        console.log('render');
        return <div>{isLoading ? 'Loading' : 'We are ready'}</div>;
    }
}

export default App;
