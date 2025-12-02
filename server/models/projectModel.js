const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    markdown: { type: String, default: "" },
    techStack: { type: [String], default: [] },
    imageUrl: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
