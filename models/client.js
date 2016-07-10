var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientSchema = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  username: String
});

clientSchema.methods.name = () => {
  return username || first_name || last_name;
};

mongoose.model('client', clientSchema);