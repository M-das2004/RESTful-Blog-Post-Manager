# 📝 RESTful Blog Post Manager

A full-stack CRUD (Create, Read, Update, Delete) application built with **Node.js**, **Express**, and **EJS**. This project demonstrates a deep understanding of RESTful routing principles, middleware implementation, and dynamic server-side rendering.

## 🚀 Features

- **Full CRUD Functionality**: Users can create new posts, view all posts, edit existing content, and delete posts.
- **RESTful Architecture**: Follows standard REST conventions for clean and predictable URL structures.
- **Dynamic Templating**: Uses EJS to render data dynamically on the frontend.
- **Unique Identifiers**: Implements `uuid` for generating unique IDs for every post.
- **Method Override**: Handles `PATCH` and `DELETE` requests from HTML forms.
- **Responsive UI**: Styled with custom CSS for a clean, card-based layout.

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript templates), CSS3
- **Tools**: Method-Override (for RESTful requests), UUID (for unique indexing)

## 📋 Standard REST Routes Implemented

| Method | Path | Purpose |
| --- | --- | --- |
| GET | /posts | List all posts |
| GET | /posts/new | Show form to create a new post |
| POST | /posts | Add a new post to the database |
| GET | /posts/:id | Show details for a specific post |
| GET | /posts/:id/edit | Show edit form for one post |
| PATCH | /posts/:id | Update a specific post |
| DELETE | /posts/:id | Remove a specific post |


