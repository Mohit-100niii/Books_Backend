import express from 'express';
import { CreateBookCtrl, deleteBookCtrl, getAllBooksCtrl, getBookCtrl, updateBookCtrl } from '../controller/BookController.js';
import Book from '../model/Book.js';

const BookRouter= express.Router();

BookRouter.post("/",CreateBookCtrl)
BookRouter.get("/",getAllBooksCtrl)
BookRouter.get("/:id",getBookCtrl)
BookRouter.put("/:id",updateBookCtrl)
BookRouter.delete("/:id",deleteBookCtrl)

export default BookRouter