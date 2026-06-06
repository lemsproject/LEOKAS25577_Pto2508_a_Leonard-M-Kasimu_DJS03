/**
 * @function fetchPodcasts
 * Asynchronously fetches podcast data from the remote API and updates state accordingly.
 * Handles loading, error, and successful data response via provided state setters.
 *
 * @param {Function} setPodcasts - State setter function to update the podcasts array.
 * @param {Function} setError - State setter function to update the error message.
 * @param {Function} setLoading - State setter function to toggle the loading state.
 *
 * @returns {Promise<void>} A Promise that resolves when the fetch process completes.
 */
export default async function fetchPodcasts(setPodcasts, setError, setLoading) {
  setLoading(true);
  setError("");

  try {
    const response = await fetch("https://podcast-api.netlify.app/");
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();
    setPodcasts(Array.isArray(data) ? data : []);
  } catch (error) {
    setError(error?.message || "Unable to fetch podcasts.");
  } finally {
    setLoading(false);
  }
}
