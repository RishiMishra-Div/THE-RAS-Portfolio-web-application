const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel");
const {isAdmin} = require("../middlewares/isAdmin")

// CREATE Project
router.post("/", isAdmin ,async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET single project
router.get("/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.json(project);
    } catch (err) {
        res.status(404).json({ error: "Project not found" });
    }
});

// UPDATE project
router.put("/:id", isAdmin, async (req, res) => {
    try {
        const { title, description, markdown, techStack, imageUrl } = req.body;

        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            { title, description, markdown, techStack, imageUrl },
            { new: true, runValidators: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// DELETE project
router.delete("/:id", isAdmin , async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.json({ message: "Project deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
