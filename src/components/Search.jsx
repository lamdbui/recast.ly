class Search extends React.Component {
  handleSearchClick() {
    var searchQuery = document.getElementsByClassName('form-control')[0].value;
    this.props.searchYouTube({max: 5, key: YOUTUBE_API_KEY, query: searchQuery}, this.props.onSearchClickedCallback);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={this.handleSearchClick.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
