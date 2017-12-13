var SearchView = Backbone.View.extend({
  initialize: function() {
  //   $('.search-form').submit(function(event){
  //     preventDefault(event);
  //     console.log(event);
  //     return false;
  //   })
  // this.query =
  // this.on('change:query', )
  },
  events: {
    'keyup .form-control': 'keyAction',
    'click .btn': 'buttonClick'
  },

  keyAction: function(event) {
    if (event.keyCode === 13) {
      this.collection.search(event.target.value);
    }
  },

  buttonClick: function(event) {
    var $val = ($('.form-control').val());
    this.collection.search($val);
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
