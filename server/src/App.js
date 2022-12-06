const express = require('express')
const app = express();
const port = 8080;
const knex = require('knex')(require('../knexfile.js')["development"]);

app.use(express.json());

const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ];


app.get('/movies', (req, res) => res.status(200).send(movies))
app.get('/movie/knex', function(req, res) {
    knex
      .select('*')
      .from('movie_list')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            `No data here because there's an error`
        })
      );
  });

app.get(`/movies/:movieId`,(req, res) =>{
    var { movieId } = req.params;
    console.log(`movieId ${movieId}`)
    let mymovie = movies.find((element, index) => {
        console.log(element, parseInt(movieId))
        return index == parseInt(movieId);
    })
    console.log(`this is my movie: ${mymovie}`)
    res.status(200).send(mymovie);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))