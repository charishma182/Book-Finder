# Book-Finder
 A minimalistic web app with a search bar, filters (e.g., search by title/author/keyword), and a results grid showing book details. It should be responsive, fast-loading, and user-friendly (e.g., loading states, error handling). No authentication needed, as per the API.
# Book Finder App

A simple React app for searching books using the Open Library API. Built for Alex, a college student who needs quick book searches.

## Features
- Search by title, author, or keyword.
- Displays book covers, titles, authors, and publication years.
- Responsive design with Tailwind CSS.
- Error handling and loading states.

## Tech Stack
- React
- Tailwind CSS
- Open Library API

## Installation
1. Clone the repo: `git clone https://github.com/example-user/book-finder-react`
2. Install dependencies: `npm install`
3. Run locally: `npm start`

## API Usage
Fetches from https://openlibrary.org/search.json?q={query}. No auth required.

## Notes
- Debounced search to optimize API calls.
- Components are modular (e.g., SearchBar, BookCard).
- Future improvements: Pagination, favorites list.
