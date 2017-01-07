class App extends React.Component {

  constructor(props) {
    super(props);    
    this.state = {VideoInPlayer: window.exampleVideoData[0], VideosInList: window.exampleVideoData};
  }

  onVideoTitleClick (video) {
    //find title of what was clicked in video list
    // match title to object in example video list data
    // console.log('before click', this.state.VideoInPlayer);
    this.setState({
      VideoInPlayer: video
    });
    // console.log('after click', this.state.VideoInPlayer);
    
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.VideoInPlayer} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.VideosInList} onVideoTitleClick={this.onVideoTitleClick.bind(this)}/>
        </div>
        <a>
        </a>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;