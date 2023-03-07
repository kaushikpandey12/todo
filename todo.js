const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({  
  task: String,
  email: String,
});
module.exports = mongoose.model('Task', NoteSchema);