import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const movie  = this.props.movie;
    console.log(movie)
    if(!movie.poster_path)
    {movie.poster_path="https://tse1.mm.bing.net/th?id=OIP.TivqJXhvJUEE3pcexwYmwgHaFj&pid=Api&P=0&w=233&h=176"}
    else{movie.poster_path=`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    return (
     
      
      <div className="col-md-2 mb-5">
        
        <div className="card ">
        <Link to={'/movie/' + movie.id}>
        <img className=" card-img-top" src={`${movie.poster_path}`} alt="Movie Cover" />
        </Link>
          <div className="card-body">
        <h5>{movie.title} <span style={{float:"right",fontSize:"16px"}}>({movie.popularity})</span></h5>
            <p className="desc">   {movie.overview}</p>
          
          {/* <Link className="btn btn-primary" to={'/movie/' + movie.id}>
            Movie Details
            <i className="fas fa-chevron-right" />
           */}
          
          </div>
          
        </div>
      </div>
      
      
    );
  }
}

export default MovieCard;
