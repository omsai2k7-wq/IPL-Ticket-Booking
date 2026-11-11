
function MatchCard({ match, date, venue, price, onBook }) {
  return (
    <div className="match-card">
      <h3>{match}</h3>

      <p>
        <strong>Date:</strong> {date}
      </p>

      <p>
        <strong>Venue:</strong> {venue}
      </p>

      <p className="ticket-price">
        <strong>Ticket Price:</strong> ₹{price}
      </p>

      <button className="book-btn" onClick={onBook}>
        Book Ticket
      </button>
    </div>
  );
}

export default MatchCard;
