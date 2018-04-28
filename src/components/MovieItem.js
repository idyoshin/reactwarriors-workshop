import React from "react"

export default class MovieItem extends React.Component {

    constructor(props) {
        super();

        this.state = {
            movie: props.movie, 
            showDetails: false
        }
    }

    render() {
        console.log('MovieItem state', this.state);

        const item = this.state.movie ; 

        const imageUrl = `https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`

        return ( 
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <div className="card-img">
                        <img src={imageUrl} alt="Poster" style={{width: '100%'}} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {item.vote_average}</p>
                    </div>

                    <div>
                        
                        <button className="btn btn-info" onClick={ () => { this.setState({showDetails: !this.state.showDetails})}}>
                            {this.state.showDetails ? 'Hide details' : 'Show details'}
                        </button>
                        {
                            this.state.showDetails 
                            ? (
                                <p className="">
                                    {item.overview}
                                </p>
                            ) 
                            : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}