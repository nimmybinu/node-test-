const User = require("../models/userModel");
const Post = require("../models/postModel");

exports.createPost = async (req, res, next) => {
    try {
        const { title, body, createdBy, active, location } = req.body;
        const post = new Post({
            title,
            body,
            createdBy,
            active,
            location,
        });
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//update post
exports.updatePost = async (req, res, next) => {
    try {
        const { title, body, active, location } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                title,
                body,
                active,
                location,
            },
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//delete post
exports.deletePost = async (req, res, next) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//get all post
exports.getPost = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//get geolocation
exports.getLocation = async (req, res, next) => {
    try {
        const { coordinates } = req.body.location;
        const [longitude, latitude] = coordinates;
        const posts = await Post.find({
            location: {
                type: "Point",
                coordinates: [parseFloat(longitude), parseFloat(latitude)],
            },
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
