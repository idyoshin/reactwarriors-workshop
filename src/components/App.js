import React from "react";
import MovieItem from "./MovieItem";
import { API_KEY_3 } from "../utils";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: [], 
      isFetched: false, 
      movieCollection: 'now_playing'
    }
  }

  componentDidMount() {
    const link = `https://api.themoviedb.org/3/movie/${this.state.movieCollection}?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);

        this.setState( {
          movies: data.results
        })
        // update this.state.movie, this.state.isFetched
      });
  }


  render() {
    console.log('App state', this.state) ;


    return (
      <div className="container">
        <div className="row">{
          (this.state.movies.map(movie => {
            return (
              <div key={movie.id} className="col-4">
                <MovieItem movie={movie}  />
  
              </div>
            )
          })
        )}
        </div>
      </div>
    );
  }
}

export default App;
