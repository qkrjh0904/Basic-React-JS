import React from 'react';
import Axios from 'axios';
import Movie from './Movie';
// import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        await Axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
            .then((res) => {
                const movies = res.data.data.movies;
                // console.log(movies);
                this.setState({ movies, isLoading: false });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        // console.log('render');
        return (
            <div>
                {isLoading
                    ? 'Loading'
                    : movies.map((movie) => (
                          <Movie
                              key={movie.id}
                              id={movie.id}
                              year={movie.year}
                              title={movie.title}
                              summary={movie.summary}
                              poster={movie.medium_cover_image}
                          />
                      ))}
            </div>
        );
    }
}

export default App;
