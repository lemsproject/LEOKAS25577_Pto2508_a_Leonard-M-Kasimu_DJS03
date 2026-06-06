import { useEffect, useState } from "react";
import fetchPodcasts from "./api/fetchPodcasts";
import Header from "./components/Header.jsx";
import PodcastGrid from "./components/PodcastGrid.jsx";
import { genres } from "./data.js";

/* fetching podcast data from a remote API
Managing loading and error states during data fetching
Rendering the podcast grid once the data is successfully fetched
displaying a loader and fallback ui during loading or error states
@returns {JSX.Element} The rendered App interface
*/

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <>
      <Header />
      <main className="app-main">
        {loading && (
          <div className="message-container" aria-live="polite">
            <div className="spinner"></div>
            <p>Loading podcasts...</p>
          </div>
        )}

        {error && (
          <div className="message-container error" aria-live="assertive">
            <p>Error occurred while trying to fetch podcasts: {error}</p>
          </div>
        )}

        {!loading && !error && podcasts.length === 0 && (
          <div className="message-container" aria-live="polite">
            <p>No podcasts were found.</p>
          </div>
        )}

        {!loading && !error && podcasts.length > 0 && (
          <PodcastGrid podcasts={podcasts} genres={genres} />
        )}
      </main>
    </>
  );
}
