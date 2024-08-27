import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    publishedDate: { type: Date },
  },
  {
    timestamps: true,
  }
);


const Book = mongoose.model("User", BookSchema);
export default Book;
