# Movie Search App

A React-based movie search and watchlist application that lets you browse, filter, and save movies to your personal watchlist.

## Features

- **Search Movies** - Find movies by title using the search bar
- **Filter by Genre** - Browse movies by Action, Sci-Fi, Drama, or Comedy
- **Filter by Rating** - Filter movies by rating thresholds (7+, 8+, 9+)
- **Watchlist Management** - Add and remove movies from your personal watchlist
- **Responsive Design** - Works seamlessly on mobile and desktop devices

## How to Use

### Searching
Type a movie title in the search bar to filter the movie list in real-time.

### Filtering
- Click on genre buttons (Sci-Fi, Action, Drama, Comedy) to filter by category
- Click on rating buttons (7+, 8+, 9+) to show only highly-rated movies
- Click "All" to reset filters
- Filters can be combined (e.g., Action movies with 8+ rating)

### Managing Watchlist
- Click "Add to Watchlist" on any movie to save it
- Added movies appear in the "My Watchlist" section below
- Click "Remove" to delete a movie from your watchlist
- The "Add to Watchlist" button becomes disabled once a movie is added

## Tech Stack

- React 
- Tailwind CSS
- JS

## Installation

```bash
# Clone the repository
git clone https://github.com/bharathP30/movie-search-app.git

# Navigate into the project folder
cd movie-search-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Movie Database

The app includes 18 pre-loaded Hollywood movies spanning various genres from 1972 to 2021
