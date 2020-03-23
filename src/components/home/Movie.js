import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    console.log(this.props)
    const { loading, movie } = this.props;
    console.log(loading, movie)

    let movieInfo = (
      


      <div className="container-fluid">
<div>
        <div className="searchinp">
          {/* <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1> */}
          <form id="searchForm" onSubmit={this.onSubmit}>
          <div class="input-group margin-bottom-sm pb-2" >
    
          
            <i className="fa fa-home icon" />
            </div>

          </form>
        </div>
      </div>



        <div className="row pt-2">
          <div className="col-md-3 card card-body">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h3 className="mb-4">{movie.title} <span style={{fontWeight:"300",color:"grey"}}>({movie.popularity})</span></h3>
            <h5>Year: {movie.release_date} | Length: {movie.runtime}Min | Director: {movie.release_date}</h5>
            <h5>Cast: Not Availiable</h5>
            <h5>Description: {movie.overview}</h5>
          </div>
        </div>
        
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);
