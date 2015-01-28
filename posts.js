var mongoose = require('mongoose');
var Schema       = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/t', function (error) {
    if (error) {
        console.log(error);
    }
});hello
hai swetha
var posts   = new Schema({
    username: { type: String, required: true, trim:true  },
    password : { type: String, required: true, trim:true  },
    
});
var UserModel = mongoose.model('posts', posts);

module.exports = UserModel ;
