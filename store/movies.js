const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: String,
    plot: String,
    genres: [],
    runtime: Number,
    cast: [],
    poster: String,
    title: String,
    fullplot: String,
    languages: String,
    released: Date,
    directors: [],
    rated: String,
    awards: {},
    lastupdated: String,
    year: Number,
    imdb:  {},
    countries: [],
    type: String,
    tomatoes: {},
    fresh: Number,
    critic: {},
    rotten: Number,
    lastUpdated: Date,
  })

module.exports = mongoose.model("movies", schema)

// const  Movie = mongoose.model.call(mongoose, 'sample_mflix.movies', new MovieSchema());
