import { useEffect, useMemo, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import './App.css';

const weddingDate = new Date('2027-01-08T07:00:00+05:30');

function getTimeLeft() {
  const difference = weddingDate.getTime() - Date.now();
  const safeDifference = Math.max(difference, 0);

  return {
    days: Math.floor(safeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeDifference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeDifference / (1000 * 60)) % 60),
    seconds: Math.floor((safeDifference / 1000) % 60),
  };
}

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdown = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  return (
    <main className="wedding-page">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home">
          Two Detours Later
        </a>
        <div className="nav-links">
          <a href="#story">Story</a>
          <a href="#journal">Blog</a>
          <a href="#details">Details</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">January 8, 2027 · 7:00 AM IST</p>
          <h1>Saloni & Shyamal</h1>
          <h2>#twoDetoursLater</h2>
          <p className="hero-text">
            A calm morning ceremony, a room full of favorite people, and the
            beginning of the next beautiful detour.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#details">
              View Details
            </a>
            <a className="secondary-action" href="#journal">
              Read Updates
            </a>
          </div>
        </div>

        <div className="hero-image" aria-label="Wedding hero image space">
          <div className="photo-placeholder">
            <span>Hero Image</span>
            <small>Add your favorite couple photo here</small>
          </div>
        </div>
      </section>

      <section className="countdown-section" aria-labelledby="countdown-title">
        <div>
          <p className="eyebrow">The Countdown</p>
          <h2 id="countdown-title">Until the wedding morning</h2>
        </div>
        <div className="countdown-grid">
          {countdown.map((item) => (
            <div className="countdown-tile" key={item.label}>
              <strong>{String(item.value).padStart(2, '0')}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section story-section" id="story">
        <div className="section-heading">
          <p className="eyebrow">Our Story</p>
          <h2>From a small hello to a lifetime promise</h2>
        </div>
        <div className="story-timeline" aria-label="Our relationship timeline">
          <article className="timeline-item">
            <span className="timeline-date">First Hello</span>
            <h3>The detour that started it all</h3>
            <p>
              A simple conversation turned into the kind of ease that makes two
              people want to keep finding their way back to each other.
            </p>
          </article>
          <article className="timeline-item">
            <span className="timeline-date">The Good Miles</span>
            <h3>Little plans became favorite memories</h3>
            <p>
              Trips, late calls, shared meals, and ordinary days slowly became
              the story everyone now knows was quietly becoming forever.
            </p>
          </article>
          <article className="timeline-item">
            <span className="timeline-date">The Promise</span>
            <h3>A yes to every season ahead</h3>
            <p>
              Somewhere between laughter and certainty, the next chapter became
              clear: one home, one team, and a lifetime of beautiful detours.
            </p>
          </article>
          <article className="timeline-item">
            <span className="timeline-date">8 Jan 2027</span>
            <h3>The wedding morning</h3>
            <p>
              With family and friends around them, Saloni and Shyamal begin the
              next part of the journey together.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section journal-section" id="journal">
        <div className="section-heading">
          <p className="eyebrow">Wedding Blog</p>
          <h2>Notes, updates, and little behind-the-scenes moments</h2>
        </div>
        <div className="journal-grid">
          <article>
            <span>Planning</span>
            <h3>The mood for the morning</h3>
            <p>
              Soft florals, warm light, classic silhouettes, and a celebration
              that feels intimate from the first welcome.
            </p>
          </article>
          <article>
            <span>Travel</span>
            <h3>Guest travel notes</h3>
            <p>
              Use this card for hotel ideas, airport tips, local transport, and
              anything that makes arriving feel effortless.
            </p>
          </article>
          <article>
            <span>Updates</span>
            <h3>What to expect next</h3>
            <p>
              Share RSVP reminders, outfit inspiration, ceremony timing, or
              venue updates as the date gets closer.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section details-section" id="details">
        <div className="section-heading">
          <p className="eyebrow">The Day</p>
          <h2>Ceremony details</h2>
        </div>
        <div className="details-grid">
          <div>
            <span>Date & Time</span>
            <strong>8 January 2027, 7:00 AM</strong>
          </div>
          <div>
            <span>Venue</span>
            <strong>Add venue name and address</strong>
          </div>
          <div>
            <span>Dress Code</span>
            <strong>Morning festive</strong>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#home">
            Two Detours Later
          </a>
          <p>Made with love for Saloni & Shyamal.</p>
        </div>
        <a
          className="instagram-link"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram"
        >
          <FaInstagram aria-hidden="true" />
          <span>Instagram</span>
        </a>
      </footer>
    </main>
  );
}

export default App;
