var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  initialize: function() {
  },

  search: function(query) {
    Backbone.ajax({
      type: 'GET',
      url: this.url,
      data: {
        'key': window.YOUTUBE_API_KEY,
        'part': 'snippet',
        'q': query,
        'maxResults': 5,
        'videoEmbeddable': true,
        'type': 'video'
      },
      success: (val) =>{
          // console.log((new Videos(val.items).parse({ items: fakeVideoData })));
          // this.fetchedData = val.items.map
        this.reset(val.items);
      },
      error: function() {
        console.log('You failed :(');
      }
    });
  },
  parse: function (response, xhr) {
    if (_.isObject(response.items)) {
      return response.items;
    } else {
      return response;
    }
  }
  // fetchedData: [],

  // feedData: {
  //   'key': window.YOUTUBE_API_KEY,
  //   'part': 'snippet',
  //   'q': 'hack reactor',
  //   'maxResults': 5,
  //   'videoEmbeddable': true
  // }
});