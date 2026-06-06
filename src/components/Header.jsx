/**
 * Header component for the podcast discovery landing page.
 * Displays the application title and sets the top-level app layout.
 *
 * @returns {JSX.Element}
 */
export default function Header() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <div>
          <h1>🎙️ Podcast Discovery</h1>
          <p>Browse trending shows, seasons, genres, and recent updates.</p>
        </div>
      </div>
    </header>
  );
}
