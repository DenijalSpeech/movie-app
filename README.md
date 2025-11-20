**Ticket Type:** Feature  
**Priority:** Medium  

## Description
Implement a Movie Ratings feature in the Vue 3 application. This feature will fetch movies from an external API and display them in a card-based layout. Users can view movie details and rate each movie. The feature includes state management with Pinia and responsive UI styling.

## Acceptance Criteria
1. Movies should be fetched from `https://api.example.com/movies` using `axios`.
2. Each movie should be displayed in a `MovieCard` with:
   - Title
   - Description
   - Rating
   - "Rate" button
3. Clicking the "Rate" button should trigger a placeholder,
4. The list of movies should be rendered in a list
5. State management should be handled
   - `movies` array stores all fetched movies.
   - `loading` state should indicate fetch status.
6. Styling should be consistent with the provided CSS:
   - Buttons and cards styled according to design.

