// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

/* ---------------------------------------- Eigene Notizen
Practice JavaScript advanced methods (`map`, `reduce`, `filter` and `sort` to manipulate arrays)

We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to _map_ through the array of movies and get all 
the directors into one array as a final result. Go ahead and create a function named `getAllDirectors()` that receives an array of movies as an argument 
and returns a new (_mapped_ array).
------------------------------------------------------------------------- */


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsArr = movies.map(function(eachMovie) {
    return eachMovie.director;
  })
  return directorsArr;
  };


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


//  `filter` the array so we can have only the **drama** movies where **Steven Spielberg** is the director:

function howManyMovies(movies) {
  
  // wie viele Filme von Spielbgerg:

const amountOfSpielbergMovies = movies.filter(function(value){
  return movies.director === 'Steven Spielberg';
  
})
return amountOfSpielbergMovies.length

  /* Filter für Spielberg-Filme & Drama (Genre)
  const spielbergMovies = movies.filter(function (movie){
    return movies.director === 'Steven Spielberg' && movies.genre ==='Drama';
  });
  return spielbergMovies
  */
}








// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const totalScore = movies.reduce(function (sum, movies) {
    return sum + movies.score;
  }, 0);
    
    let averageRating = totalScore / movies.length;
    
    let averageRatingRounded = Number(parseFloat(averageRating).toFixed(2));
    
    return averageRatingRounded
    
   
  }
  
  




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
