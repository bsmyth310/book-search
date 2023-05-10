const { Schema, model } = require('mongoose');
const bcrypt = require(bcrypt);

//importschema from book.js
const bookSchema = require('./Book');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        }
    }
)

module.exports = { User };
