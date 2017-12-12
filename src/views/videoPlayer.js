var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //on change of select, render with selected model

  },

  // event: {
  //   'select':
  // }

  render: function() {
    // console.log('video player view rendered');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
