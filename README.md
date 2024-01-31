# TV Shows React App

This ReactJS application displays information about TV shows using the TVMaze API. It consists of two screens: the first screen lists TV shows, and the second screen provides detailed information about a selected show.

## Features

- Fetches data from the [TVMaze API](https://api.tvmaze.com/search/shows?q=all).
- Displays a list of TV shows with images and names on the first screen.
- Allows users to click on a "View Summary" button to navigate to a second screen with detailed information about the selected show.
- On the second screen, users can view the show's name, image, summary, and book a movie ticket.

## Screenshots

![TV Shows List](screenshots/shows-list.png)

![Show Details](screenshots/show-details.png)

## Setup

1. Clone the repository.

   ```bash
   git clone https://github.com/avisek/tv-shows-app
   cd tv-shows-app
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Run the app.

   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser.

## Technologies Used

- **ReactJS**: JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React.js applications.
- **TypeScript**: To ensure type safety and robust code.
- **SCSS**: Styling the components.

## Dependencies

- `react-router-dom`: For handling navigation.
- `@tanstack/react-query`: For caching the API responses.
- `axios`: For fetching the shows from TVMaze API.

## Deployment

https://avisek.github.io/tv-shows-app

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
