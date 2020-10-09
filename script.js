let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    console.log("Printing all movies....");
    for (var i = 0; i < allMovies.length; i++) {
        curr_movie = allMovies[i];
        console.log(curr_movie.title + ", rating of " + curr_movie.rating + ", havewatched: " + curr_movie.havewatched);
    }

    console.log("\nYou have " + allMovies.length + " movies in total");
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    console.log("printing movie that has a rating higher than "+ rating);
    var count = 0;
    for (var i = 0; i < allMovies.length; i++) {
        curr_movie = allMovies[i];
        if (curr_movie.rating > rating) {
            console.log(curr_movie.title + " has a rating of " + curr_movie.rating)
            count += 1;
        }
    }

    console.log("\nIn total, there are " + count + " matches")

}

//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    console.log("changing the status of the movie...");    
    for (var i = 0; i < allMovies.length; i++) {
        curr_movie = allMovies[i];
        if (curr_movie.title == title) {
            curr_movie.havewatched = !curr_movie.havewatched;
        }
    }

  
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);