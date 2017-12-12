var VideoListView = Backbone.View.extend({

  // el:'.list',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideoEntry, this);
    return this;
  },

  renderVideoEntry: function(video) {
    var videoEntryView = new VideoListEntryView({'model': video});
    $('.video-list').append(videoEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')
});

// render: function() {
//     this.$el.empty();
//     this.collection.forEach(this.renderMovie, this);
//   },

//   renderMovie: function(movie) {
//     var movieView = new MovieView({model: movie});
//     this.$el.append(movieView.render());
//   }



// });
// new MoviesView({
//       el: this.$('#movies'),
//       collection: this.collection
//     }).render();
