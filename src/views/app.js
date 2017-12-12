

var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData); //collection of video models
    this.listenTo(this.videos, 'select', this.renderVideoPlayer);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    window.selected = this.videos.at(0);

    new VideoListView({'collection': this.videos,
      'el': this.$('.list')}).render();

    this.renderVideoPlayer(window.selected);

    new SearchView({'collection': this.videos,
      'el': this.$('.search')}).render();

    return this;
  },

  renderVideoPlayer: function(model) {
    new VideoPlayerView({'model': model,
      'el': this.$('.player')}).render();
  },

  template: templateURL('src/templates/app.html')

});

