// Wrapper for all votes belonging inside a SessionModel

var Backbone = require('backbone');
var VoteModel = require('../models/VoteModel').VoteModel;

exports.VotesCollection = Backbone.Collection.extend({
  model: VoteModel,

  // Adds a new user and his or her default vote and returns its unique identifier
  addNewUser: function(userId) {
    this.add(new VoteModel({id: userId}));
  }
});
