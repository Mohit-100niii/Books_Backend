import Book from "../model/Book.js";
import asyncHandler from "express-async-handler";

export const CreateBookCtrl = asyncHandler(async (req, res) => {
  try {
    const { title, author, isbn, publishedDate } = req.body;
    if (!title) {
      throw new Error("Please Provide title");
    }

    if (!author) {
      throw new Error("Please Provide Author of Book");
    }
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      throw new Error("A book with this title already exists.");
    }

    const existingBookByisbn = await Book.findOne({ isbn });
    if (existingBookByisbn) {
      throw new Error("A book with this isbn already exists.");
    }


    const newBook = await Book.create({ title, author, isbn, publishedDate });

    res.status(201).json({
      status: "success",
      messsage: "Book Created Successfully",
      data: newBook,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//get all Books
export const getAllBooksCtrl = asyncHandler(async (req, res) => {
  let { title, author, sortBy, limit, page } = req.query;

  // Pagination
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Total count
  const total = await Book.countDocuments();

  // Pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  // Filtering logic
  let filter = {};
  if (title) filter.title = new RegExp(title, "i");
  if (author) filter.author = new RegExp(author, "i");

  let sortOptions = {};
  if (sortBy) {
    if (sortBy === "title") {
      sortOptions.title = 1;
    } else if (sortBy === "author") {
      sortOptions.author = 1;
    } else if (sortBy === "publishedDate") {
      sortOptions.publishedDate = 1;
    }
  }

  // Find books with filter, skip, limit, and sort
  const allBooks = await Book.find(filter)
    .sort(sortOptions)
    .skip(startIndex)
    .limit(limit);

  res.status(201).json({
    status: "success",
    message: "All Books Fetch Successfully",
    data: allBooks,
    pagination,
  });
});

//get one Book
export const getBookCtrl = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  if (!book) {
    throw new Error("Book Not Found");
  }

  res.status(201).json({
    status: "success",
    message: "Book Fetch Successfully",
    data: book,
  });
});

//updateBook
export const updateBookCtrl = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const { title, author, isbn, publishedDate } = req.body;
  const book = await Book.findById(id);
  if (!book) {
    throw new Error("Book Not Found");
  }

  const UpdatedBook = await Book.findByIdAndUpdate(
    id,
    {
      title,
      author,
      isbn,
      publishedDate,
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    status: "success",
    message: "Book Updated Successfully",
    UpdatedBook,
  });
});

export const deleteBookCtrl = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const book = await Book.findById(id);
  if (!book) {
    throw new Error("Book Not Found");
  }
  await Book.findByIdAndDelete(id);

  res.json({
    status: "success",
    message: "Book Deleted Successfully",
  });
});
