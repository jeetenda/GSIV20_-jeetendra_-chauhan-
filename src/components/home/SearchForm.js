import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div>
        <div className="searchinp pb-2">
          {/* <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1> */}
          <form id="searchForm" onSubmit={this.onSubmit}>
          <div class="input-group margin-bottom-sm pb-2" >
    
            <input
              type="text"
              className="form-control bg-grey"
              name="searchText"
              placeholder="Search Movies"
              onChange={this.onChange}

            />
            <i className="fa fa-home icon" />
            </div>

          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
