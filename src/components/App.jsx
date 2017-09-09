class App extends React.Component {
  constructor(props) {
    super(props);
    this.default = {
      videos: [{
        id: {
          videoId:''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: ''
            }
          }
        },
      }],
      maxResults: 5,
      key: YOUTUBE_API_KEY,
      query: 'cats'
    };
    this.videos = this.default.videos;
    this.state = {
      currentlyPlayingVideo: this.videos[0],
      videoLiszt: this.videos
    };
    this.onVideoClicked = this.onVideoClicked.bind(this);
    this.onSearchClicked = this.onSearchClicked.bind(this);
  }

  componentDidMount() {
    this.props.searchYouTube({
      max: this.default.maxResults,
      key: this.default.key,
      query: this.default.query
    }, this.onSearchClicked);
  }

  // TODO: try with fatty arrow function // beesting
  onVideoClicked(newVideo) {
    this.setState({
      currentlyPlayingVideo: newVideo
    });
  }

  onSearchClicked(fetchResults) {
    this.setState({
      videoLiszt: fetchResults.length > 0 ? fetchResults : this.default.videos,
      currentlyPlayingVideo: fetchResults.length > 0 ? fetchResults[0] : this.default.videos[0]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchClickedCallback={this.onSearchClicked} searchYouTube={this.props.searchYouTube}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentlyPlayingVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoLiszt} videoClickedStateCallback={this.onVideoClicked}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
