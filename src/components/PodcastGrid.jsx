import PodcastCard from "./PodcastCard.jsx";

/**
 * Display a grid layout of podcast preview cards.Each card includes.
 * podcast details such as title, image, seasons, and updated date.
 * @param {Object} props
 * @param {Array<Object>} props.podcasts - Array of podcast objects to display.
 * @param {Array<Object>} props.genres - Array of genre objects for mapping IDs to genre titles.
 *
 * @returns {JSX.Element} The rendered PodcastGrid component.
 */
export default function PodcastGrid({ podcasts, genres }) {
  return (
    <section className="grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </section>
  );
}
