// Sample movie data (you would fetch this from a database or API)
const movies = [
    { title: "Movie 1", genre: "action", platform: "Netflix" },
    { title: "Movie 2", genre: "comedy", platform: "Amazon Prime" },
    // Add more movie objects here
];

// Function to filter movies by genre
function filterMoviesByGenre(genre) {
    return movies.filter(movie => movie.genre === genre);
}

// Function to display movies on the page
function displayMovies(movies) {
    const moviesList = document.getElementById("movies-list");
    moviesList.innerHTML = ""; // Clear existing content

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
            <h2>${movie.title}</h2>
            <p>Genre: ${movie.genre}</p>
            <p>Platform: ${movie.platform}</p>
        `;
        moviesList.appendChild(card);
    });
}

// Event listeners for genre links
document.getElementById("action").addEventListener("click", () => {
    const actionMovies = filterMoviesByGenre("action");
    displayMovies(actionMovies);
});

document.getElementById("comedy").addEventListener("click", () => {
    const comedyMovies = filterMoviesByGenre("comedy");
    displayMovies(comedyMovies);
});

// Add event listeners for other genres as needed
