/**
 * Format an ISO date string into a date label.
 *
 * @param {string} isoString - ISO-formatted date string from the podcast API.
 * @returns {string} Human-readable date text.
 */
export default function formatDate(isoString) {
  const date = new Date(isoString);
  if (!isoString || Number.isNaN(date.getTime())) {
    return "Date unavailable";
  }

  const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return `Updated ${formattedDate}`;
}
