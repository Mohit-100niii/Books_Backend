# RESTful API for Books

## Objective

This project aims to create a RESTful API using Node.js and Express that allows users to perform CRUD (Create, Read, Update, Delete) operations on a dataset representing "Books". The data is stored in a MongoDB database and managed with Mongoose for object modeling.

## Application Requirements

 **Setup**
   - **Node.js**: Server-side JavaScript runtime.
   - **Express**: Web framework for Node.js.
   - **MongoDB**: NoSQL database for storing book data.
   - **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.


## Setup and Running the Server

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Install Dependencies**
   ```bash
    npm install
3. **Setup Environment Variables**
   Create a .env file in the root directory with the following content
   ```bash
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=5000

4. **Run the Server**
   ```bash
   npm start

2. **Endpoints**

   - **POST /api/books**
     - **Description**: Create a new book entry.
     - **Request Body**: JSON object with fields:

   - **GET /api/books**
     - **Description**: Retrieve a list of all books.

   - **GET /api/books/:id**
     - **Description**: Retrieve details of a specific book by its ID.

   - **PUT /api/books/:id**
     - **Description**: Update a book's information by its ID.
     - **Request Body**: JSON object with fields to be updated:
   
   - **DELETE /api/books/:id**
     - **Description**: Delete a specific book by its ID.

## Postman Collection

To facilitate testing, a Postman collection with pre-configured requests for each endpoint is provided. You can import this collection into Postman to quickly test the API.

1. [Download the Postman Collection] https://drive.google.com/file/d/1T_B_bPPSQKvetW3Z5Lb1UJhRt5AzlPh3/view?usp=sharing

2. **Importing into Postman**:
   - Open Postman.
   - Click on "Import" in the top-left corner.
   - Select the downloaded Postman collection file.
   - Click "Open" to import.

   You will now have access to pre-configured requests for each endpoint in the collection.


