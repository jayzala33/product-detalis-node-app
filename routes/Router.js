const express = require("express");
const Post = require("../models/Post");
const Movie = require("../store/movies");
const router = express.Router();
const uuid = require("uuid");

router.get("/movies", async (req, res) => {
  const movies = await Movie.find().limit(10);
  res.send(movies);
});

router.post("/movies", async (req, res) => {
  const newMovie = {
    ...req.body,
    id: uuid.v4(),
  };
  const movie = new Movie(newMovie);
  await movie.save();
  res.send(movie);
});

router.patch("/movie/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedMovie);
  } catch {
    res.status(500);
    res.send({ error: "Something went wrong!" });
  }
});

router.delete("/movie/:id", async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Movie doesn't exist!" });
  }
});

module.exports = router;
