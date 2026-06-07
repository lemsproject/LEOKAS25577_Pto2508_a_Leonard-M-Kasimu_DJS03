# Podcast Discovery

Podcast Discovery is a React + Vite application built to fetch and display podcast information from a remote API.
The project is structured to support a modern, responsive web interface with a focus on usability, modular components, and maintainable code.

This README documents the app architecture, the component hierarchy, the data flow, and the build process.

---

## Project Overview

The app loads podcast metadata from a public API and renders a set of podcast cards inside a responsive grid layout.
Each card includes the podcast image, title, seasons count, last updated date, and genre tags.
The app also shows a loading spinner while data is being fetched and displays an error message if the request fails.

A small local `genres` dataset is used to map genre IDs to readable genre titles, so the app can display friendly labels for each podcast.

---

## Key Features

- Remote API fetching for podcast data
- Loading state feedback with a spinner
- Error state messaging for failed requests
- Responsive card grid layout for podcast content
- Genre mapping from local data to tag labels
- Date formatting for podcast update timestamps
- Clean modular React component design
- Built with Vite for fast local development and optimized production builds

---

## File Structure

The project is organized into the following main files and folders:

- `index.html`: application entry HTML with root mounting point
- `package.json`: npm package metadata, dependencies, and scripts
- `package-lock.json`: locked dependency tree for deterministic installs
- `src/main.jsx`: React entry point that mounts the app to `#root`
- `src/App.jsx`: main application shell with fetch logic and conditional rendering
- `src/api/fetchPodcasts.js`: helper to fetch podcast data and manage loading/error state
- `src/components/Header.jsx`: header component that displays the page title and description
- `src/components/PodcastGrid.jsx`: container component for rendering the podcast cards grid
- `src/components/PodcastCard.jsx`: individual podcast card component
- `src/utils/formatDate.js`: utility for formatting ISO date strings into readable labels
- `data.js`: local genre metadata and mapping information

---

## App Structure and Data Flow

1. **Entry point**
   - `src/main.jsx` initializes React and mounts the app at the DOM node with ID `root`.
2. **Core app**
   - `src/App.jsx` is the top-level component.
   - It defines state hooks for `podcasts`, `loading`, and `error`.
   - It uses `useEffect` to call `fetchPodcasts` once on mount.
3. **Data fetch helper**
   - `src/api/fetchPodcasts.js` handles the network request.
   - It sets loading state to `true` before the request starts.
   - It updates the podcasts list on success.
   - It captures and reports errors on failure.
   - It clears the loading state in a `finally` block.
4. **Rendering states**
   - While `loading` is true, the app renders a spinner and a loading message.
   - If `error` is set, the app shows an error card with the message.
   - If the request succeeds and returns zero podcasts, a fallback message is shown.
   - If podcasts exist, the app renders `PodcastGrid`.
5. **Grid display**
   - `src/components/PodcastGrid.jsx` receives the podcast list and genre metadata.
   - It maps over the podcast array and renders a `PodcastCard` for each item.
6. **Podcast cards**
   - `src/components/PodcastCard.jsx` renders each podcast’s image, title, seasons, update date, and tags.
   - It converts the podcast's genre IDs into readable genre titles using the local `genres` data.
   - It uses `formatDate` to render a human-friendly update label.

---

## Build and Development Setup

The project uses Vite as the build tool and React for rendering.
Vite provides a fast development server and quick hot module replacement during local development.
The `package.json` includes the following commands:

- `npm install` to install dependencies
- `npm run dev` to start the Vite development server
- `npm run build` to create a production build
- `npm run preview` to preview the production build locally

## Dependencies

This app depends on:

- `react` for rendering UI components
- `react-dom` for browser DOM rendering
- `vite` as the frontend build tool
- `@vitejs/plugin-react` for React support in Vite

The `package-lock.json` ensures the exact dependency tree is preserved across installs.

---

## Styling and UX

The app is laid out using CSS styles that provide:

- a consistent site background and typography
- a centered header section with title and subtitle
- a responsive grid using CSS grid layout
- card components with hover lift effects
- lightweight modal and message styling for accessibility
- usable spacing and readable text sizes for cards and metadata

Hover and focus states are designed to make the podcast cards feel interactive while keeping the UI clean.

---

## Component Design

Each component is intentionally small and focused:

- **Header** is responsible only for the top hero area.
- **PodcastGrid** is responsible only for arranging cards.
- **PodcastCard** is responsible only for a single card’s content.
- **fetchPodcasts** is responsible only for fetching and state control.
- **formatDate** is responsible only for converting ISO dates.

This separation makes the code easier to maintain and extend.

---

## Notes on the Genre Data

The local `data.js` file contains genre metadata that is used to map API genre IDs to readable titles.
This data file also includes longer descriptions for each genre category, which can be reused when extending the app to show genre details.

The app only uses the genre title for display, but the data is structured so the project can be expanded later.

---

## Why This Structure

This architecture was chosen to keep the app:

- simple and easy to understand
- modular and easy to extend
- performance-friendly for development and build
- resilient to API and network issues

The use of a separate API helper and small presentational components supports future growth without sacrificing clarity.

---

## Deployment Considerations

To deploy this app, build the production bundle with `npm run build` and serve the resulting `dist` folder from a static host.
Vite output is optimized by default for modern browsers and supports asset hashing for cache control.

---

## Conclusion

This project was built with React and Vite, using a modular component structure and remote API integration.
It was done by Leonard MK and demonstrates a clean, responsive podcast discovery interface.

Thank you for reviewing this project documentation.

