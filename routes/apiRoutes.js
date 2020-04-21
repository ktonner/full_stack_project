const router = require("express").Router();
const db = require("../models");
// you this file to code your API routes

// route: /api
// i.e: router.get("/", (req, res) => {
//     //your code here
// })
// Route for finding book by title
router.get("/:book", (req,res) => {
    const findBook = db.Book.findOne({where: {title: req.params.book}});
    const { title, author, description } = findBook;
    res.json({ title,author, description });
})
// Route for finding books by author
router.get("/:author", (req,res) => {
    const findBook = db.Book.findOne({where: {author: req.params.author}});
    const { title, author, description } = findBook;
    res.json({ title, author, description });
})

router.post("/book", (req,res) => {
    db.Book.create(req.body).then(function(dbBook) {
        res.json(dbBook);
    });
})

module.exports = router;
