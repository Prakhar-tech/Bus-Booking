const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  matrix: [[{ seat: String, booked: Number }]],
  name: { type: String, default: "Bus1" },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
