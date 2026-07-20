# Post-Verse is a simple RESTful web application built using **Node.js**, **Express.js**, and **EJS** that demonstrates the implementation of CRUD operations following REST architecture.

# The application allows users to create, view, edit, and delete posts through an intuitive web interface. It is designed as a beginner-friendly project to understand REST APIs, routing, middleware, server-side rendering, and form handling in Express.js.

---

##  Features

- Create a new post
- View all posts
- View a single post in detail
- Edit an existing post
- Delete a post
- Responsive UI using HTML & CSS
-  RESTful routing with Express.js
- Server-side rendering using EJS Templates


---

## Tech Stack

- Node.js
- Express.js
- EJS
- HTML5
- CSS3
- JavaScript
- UUID (for generating unique IDs)

---

## Project Structure

```
Post-Verse/
│
├── public/
│   ├── style.css
│   └── images
│
├── views/
│   ├── index.ejs
│   ├── show.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## RESTful Routes

| Method | Route | Description |
|---------|-------|-------------|
| GET | /posts | Display all posts |
| GET | /posts/new | Show form to create a new post |
| POST | /posts | Create a new post |
| GET | /posts/:id | View a single post |
| GET | /posts/:id/edit | Show edit form |
| PATCH | /posts/:id | Update an existing post |
| DELETE | /posts/:id | Delete a post |

---

## Author

**Ranjita Das**

GitHub: https://github.com/Ranjita0017

---