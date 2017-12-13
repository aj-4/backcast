var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //on change of select, render with selected model
    window.selected = this.collection.at(0);
    this.listenTo(this.collection, 'select', this.render);
    // this.model = window.selected;
  },

  // event: {
  //   'select':
  // }

  render: function() {
    // console.log('video player view rendered');
    setTimeout((() => { this.$el.html(this.template(window.selected.attributes)); }), 0);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
