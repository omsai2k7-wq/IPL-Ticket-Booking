
import { useState } from "react";
import Navbar from "./components/Navbar";
import MatchCard from "./components/MatchCard";
import { showToast } from "./app";
import "./App.css";

// Match Data
const matches = [
  {
    id: 1,
    match: "CSK vs MI",
    date: "10 April 2026",
    venue: "Chennai",
    price: 800
  },
  {
    id: 2,
    match: "RCB vs CSK",
    date: "12 April 2026",
    venue: "Bengaluru",
    price: 1000
  },
  {
    id: 3,
    match: "MI vs RCB",
    date: "15 April 2026",
    venue: "Mumbai",
    price: 900
  }
];

function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [selectedMatch, setSelectedMatch] = useState("");

  // Smooth scrolling function
  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  }

  // Book button interaction
  function handleBookClick(match) {
    setSelectedMatch(match.match);

    scrollToSection("booking");

    showToast(
      setToastMessage,
      `${match.match} selected successfully!`
    );
  }

  // Booking form submission
  function handleSubmit(event) {
    event.preventDefault();

    showToast(
      setToastMessage,
      "Your booking details have been submitted!"
    );
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">

        {/* Hero Section */}
        <section className="hero">
          <h1>Experience The Stadium Energy Live!</h1>
          <p>
            Book your IPL 2026 tickets and witness the action live.
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection("matches")}>
              View Schedule
            </button>

            <button onClick={() => scrollToSection("booking")}>
              Book Ticket
            </button>
          </div>
        </section>

        {/* Match List */}
        <section className="matches-section" id="matches">
          <h2>Upcoming Matches</h2>

          <div className="matches-container">
            {matches.map((item) => (
              <MatchCard
                key={item.id}
                match={item.match}
                date={item.date}
                venue={item.venue}
                price={item.price}
                onBook={() => handleBookClick(item)}
              />
            ))}
          </div>
        </section>

        {/* Booking Form */}
        <section className="booking-section" id="booking">
          <h2>Book Your IPL Tickets</h2>
          <p>Enter your details to continue your booking.</p>

          <form className="booking-form" onSubmit={handleSubmit}>
            <label>Selected Match</label>
            <input
              type="text"
              value={selectedMatch}
              placeholder="Select a match above"
              readOnly
              required
            />

            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              minLength="3"
              maxLength="30"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              minLength="10"
              maxLength="10"
              pattern="[0-9]{10}"
              required
            />

            <label>Number of Tickets</label>
            <input
              type="number"
              min="1"
              max="10"
              placeholder="Maximum 10 tickets"
              required
            />

            <button type="submit" className="book-btn">
              Submit Booking
            </button>
          </form>
        </section>

      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast">
          {toastMessage}
        </div>
      )}

      <footer className="footer">
        <p>
          © 2026 IPL Ticket Booking Website. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
