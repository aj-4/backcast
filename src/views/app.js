var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videos.search('Hack Reactor');
    this.videos.on('all', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({'collection': this.videos,
      'el': this.$('.list')}).render();

    new VideoPlayerView({'collection': this.videos,
      'el': this.$('.player')}).render();

    new SearchView({'collection': this.videos,
      'el': this.$('.search')}).render();

    return this;
  },

  renderVideoPlayer: function(model) {
  },

  template: templateURL('src/templates/app.html')

});

