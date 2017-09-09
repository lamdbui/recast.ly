class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyPlayingVideo: exampleVideoData[0]
    };
    this.onVideoClicked = this.onVideoClicked.bind(this);
  }

  // TODO: try with fatty arrow function // beesting
  onVideoClicked(newVideo) {
    this.setState({
      currentlyPlayingVideo: newVideo
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentlyPlayingVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} videoClickedStateCallback={this.onVideoClicked}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
