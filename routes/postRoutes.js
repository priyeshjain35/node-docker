const express = require("express");
const protect = require("../middleware/authMiddleware");

const postControlller = require("../controllers/postController");

const router = express.Router();


router
    .route("/")
    .get(protect, postControlller.getAllPosts)
    .post(protect, postControlller.createPost)

router
    .route("/:id")
    .get(protect, postControlller.getOnePost)
    .patch(protect, postControlller.updatePost)
    .delete(protect, postControlller.deletePost)

module.exports = router;