var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData); //collection of video models
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({'collection': this.videos});
    return this;
  },

  template: templateURL('src/templates/app.html')

});

