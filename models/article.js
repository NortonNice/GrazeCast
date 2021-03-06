// TAKEN FROM MATCHING FILE IN MONGOOSE 20
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model

var ArticleSchema = new Schema({
    // 'title is required and of type String'
    title: {
        type: String,
        required: true 
    },
    // 'link' is required and of type String
    link: {
        type: String,
        required: true 
    },
    // 'note' is an object that stores a Note id
    // the ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// This creates or model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;

