import formatDate from "../utils/formatDate.js";

/**
 * @param {Object} props
 * @param {Object} props.podcast
 * @param {string} props.podcast.id - the unique identifier for the podcast
 * @param {string} props.podcast.title - the title of the podcast
 * @param {string} props.podcast.image - URL for the podcast image.
 * @param {number} props.podcast.seasons - the number of seasons available for the podcast.
 * @param {string} props.podcast.updated - ISO date string representing the last time the podcast was updated.
 * @param {Array<Object>} props.genres - Array of genre objects for mapping IDs to genre titles.
 *
 * @returns {JSX.Element} The rendered PodcastCard component.
 */
export default function PodcastCard({ podcast, genres }) {
  const genreSpans = Array.isArray(podcast.genres)
    ? podcast.genres.map((genreId) => {
        const genre = genres.find((item) => item.id === genreId);
        return (
          <span className="tag" key={genreId}>
            {genre?.title ?? `Genre ${genreId}`}
          </span>
        );
      })
    : [];

  return (
    <article className="card">
      <img src={podcast.image} alt={`${podcast.title} cover`} />
      <div className="card-body">
        <h3>{podcast.title}</h3>
        <p className="seasons">Seasons: {podcast.seasons}</p>
        <p className="updated">{formatDate(podcast.updated)}</p>
        <div className="tags">{genreSpans}</div>
      </div>
    </article>
  );
}
