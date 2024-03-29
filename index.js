const express = require("express");

const app = express();

const port = 3000;

const movies = [
    {
        id: 1,
        title: "Citizen Kane",
        director: "Orson Wells",
        year: "1941",
        color: false,
        duration: 120,
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: "1972",
        color: true,
        duration: 180,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: "1994",
        color: true,
        duration: 180,
    },
];


const favMovieList = (req, res) => {
    res.send("Welcome to my favourite movie list")
};

app.get("/", favMovieList);

const getMovieList = (req, res) => {
    res.status(200).json(movies);
};

const getMoviesById = (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === id);

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).send("Not Found");
    }
}

app.get("/api/movies/:id", getMoviesById)

app.get("/api/movies", getMovieList);

app
    .listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })
    .on("error", (err) => {
        console.error("Error:", err.message);
    });
