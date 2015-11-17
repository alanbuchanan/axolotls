'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PinSchema = new Schema({
  url: String,
  ownerId: String,
  ownerUsername: String,
  title: String
});

module.exports = mongoose.model('Pin', PinSchema);
