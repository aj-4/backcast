var VideoListEntryView = Backbone.View.extend({

  // el:'.video-list',

  // initialize: function() {
  //   this.on('click', function() {
  //     this.model.select});
  // },

  events: {
    'click .video-list-entry-title': 'clickHandler'
  },

  clickHandler: function() {
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },


  template: templateURL('src/templates/videoListEntry.html')

});
