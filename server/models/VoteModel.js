// Stores a given user's current, continious vote

var Backbone = require('backbone');

exports.VoteModel = Backbone.Model.extend({
  // voteVal is initially set to passive state (not registering votes), not zero
  defaults: {
    voteVal: null
  }
});
