var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    key: options.key,
    type: 'video',
    videoEmbeddable: true   
  })
    .done(({items}) => { if (callback) { callback(items); } });
};

window.searchYouTube = searchYouTube;
