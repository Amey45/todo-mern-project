const express = require('express')
const {getTodo, createTodo, updateTodo, deleteTodo, searchTodo, getOneTodo} = require('../controllers/todoController')

const todoRouter = express.Router();

todoRouter.get("/", getTodo)

todoRouter.get("/:id", getOneTodo)

todoRouter.post("/", createTodo)

todoRouter.put("/:id", updateTodo)

todoRouter.delete("/:id", deleteTodo)

todoRouter.get('/search/:keyword', searchTodo)


module.exports = todoRouter