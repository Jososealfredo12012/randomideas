const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// get all ideas
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.send({ success: true, data: ideas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: "Something went wrong" });
  }
});

// get single idea
router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.send({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status.json({ success: false, error: "Something went wrong" });
  }
});

// Add an idea

router.post("/", async (req, res) => {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.send({ success: true, data: savedIdea });
  } catch (error) {
    // console.log(error);
    res.status(404).json({ success: false, error: "Something went wrong" });
  }
});

// Update idea
router.put("/:id", async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedIdea });
  } catch (error) {
    console.log(erro);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Deleted idea
router.delete("/:id", async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: {} });
  } catch (error) {
    console.log(erro);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;
