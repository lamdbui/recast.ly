class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSearchClick() {
    var that = this;
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&maxCount=5&videoEmbeddable=true&type=video&q=cats`,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        that.props.onSearchClickedCallback(data.items);
      },
      error: function (data) {
        console.error('the sadness', data);
      }
    });

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
