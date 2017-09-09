var searchYouTube = (options, callback) => {
  var queryParams = {
    maxResults: options.max,
    part: 'snippet',
    videoEmbeddable: true,
    type: 'video',
    key: options.key,
    q: options.query
  };
  if (queryParams.q) {
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search?${$.param(queryParams)}`,
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        callback(data.items);
      },
      error: function (data) {
        console.error('the sadness', data);
      }
    });
  }
};

window.searchYouTube = searchYouTube;
