import { useEffect, useMemo, useState } from 'react';
import { FaHeart, FaInstagram } from 'react-icons/fa';
import './App.css';

const weddingDate = new Date('2027-01-08T07:00:00+05:30');
const homePath = process.env.PUBLIC_URL || '/';
const aboutPath = `${homePath === '/' ? '' : homePath}/about`;

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

function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <a className="brand" href={homePath}>
        #TwoDetoursLater
      </a>
      <div className="nav-links">
        <a href={`${homePath}#story`}>Story</a>
        <a href={aboutPath}>About Us</a>
        <a href={`${homePath}#journal`}>Blog</a>
        <a href={`${homePath}#details`}>Details</a>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand" href={homePath}>
          #TwoDetoursLater
        </a>
        <p>
          Made with <FaHeart className="footer-heart" aria-label="love" /> by
          Gogo & Mithi.
        </p>
      </div>
      <a
        className="instagram-link"
        href="https://www.instagram.com/twodetourslater/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Instagram"
      >
        <FaInstagram aria-hidden="true" />
        <span>Instagram</span>
      </a>
    </footer>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <a className="not-found-logo" href={homePath} aria-label="Go home">
        <img src={`${process.env.PUBLIC_URL}/2detourslater.svg`} alt="#TwoDetoursLater" />
      </a>
      <p className="eyebrow">404 · Detour Detected</p>
      <h1>This route missed the entourage.</h1>
      <p>
        The page you wanted took a wrong turn, got distracted by wedding snacks,
        and never made it to the venue.
      </p>
      <a className="primary-action" href={homePath}>
        Back to the Wedding
      </a>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="wedding-page">
      <SiteNav />

      <section className="about-hero">
        <p className="eyebrow">About Us</p>
        <h1>Two people, many detours, one very shared playlist.</h1>
        <p>
          A little more about Saloni, Shyamal, the life they are building, and
          the things that make them wonderfully, specifically them.
        </p>
      </section>

      <section className="about-section profile-section">
        <article className="profile-card">
          <span>Saloni</span>
          <h2>Born curious, built bright</h2>
          <div className="profile-list">
            <p><strong>Birth</strong> Add Saloni's hometown, birthday, or favorite childhood memory.</p>
            <p><strong>Work</strong> A space for what she does, what she is proud of, and how she shows up.</p>
            <p><strong>Life</strong> The rituals, friendships, and little joys that make her days feel full.</p>
            <p><strong>Passion</strong> The hobbies, causes, art, books, food, or adventures she never stops talking about.</p>
          </div>
        </article>

        <article className="profile-card">
          <span>Shyamal</span>
          <h2>Steady heart, excellent detour instincts</h2>
          <div className="profile-list">
            <p><strong>Birth</strong> Add Shyamal's hometown, birthday, or the story everyone still retells.</p>
            <p><strong>Work</strong> A space for his craft, ambitions, and the work that keeps him thinking.</p>
            <p><strong>Life</strong> The people, routines, and small comforts that keep him grounded.</p>
            <p><strong>Passion</strong> The interests he lights up about, from weekend plans to lifelong obsessions.</p>
          </div>
        </article>
      </section>

      <section className="about-section together-section" id="favorite-foods">
        <div className="section-heading">
          <p className="eyebrow">Together</p>
          <h2>Favorite Foods</h2>
        </div>
        <div className="together-grid">
          <article>
            <span>Favorite Foods</span>
            <h3>Comfort, cravings, and snack diplomacy</h3>
            <p>Add the dishes you agree on, the dishes you debate, and the meals that became memories.</p>
          </article>
        </div>
      </section>

      <section className="about-section together-section" id="favorite-music">
        <div className="section-heading">
          <p className="eyebrow">Together</p>
          <h2>Favorite Music</h2>
        </div>
        <div className="together-grid">
          <article>
            <span>Favorite Music</span>
            <h3>His songs, her songs, our songs</h3>
            <p>List Saloni's favorites, Shyamal's favorites, and the tracks that belong to both of you.</p>
          </article>
        </div>
      </section>

      <section className="about-section together-section" id="pets">
        <div className="section-heading">
          <p className="eyebrow">Together</p>
          <h2>Pets</h2>
        </div>
        <div className="together-grid">
          <article>
            <span>Pets</span>
            <h3>The tiny bosses of the household</h3>
            <p>Add names, photos, dramatic habits, snack preferences, and who they secretly love more.</p>
          </article>
        </div>
      </section>

      <section className="about-section together-section" id="travel-stories">
        <div className="section-heading">
          <p className="eyebrow">Together</p>
          <h2>Travel Stories</h2>
        </div>
        <div className="together-grid">
          <article>
            <span>Travel Stories</span>
            <h3>Maps, misses, and perfect wrong turns</h3>
            <p>Share the trips, delayed trains, scenic routes, and places that taught you how well you travel together.</p>
          </article>
        </div>
      </section>

      <section className="about-section together-section" id="socials">
        <div className="section-heading">
          <p className="eyebrow">Together</p>
          <h2>Socials</h2>
        </div>
        <div className="together-grid">
          <article>
            <span>Socials</span>
            <h3>Where the updates live</h3>
            <p>Link Instagram, photo albums, wedding updates, or any place guests can follow along.</p>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function WeddingPage() {
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
      <SiteNav />

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
          <h2 id="countdown-title">Until the DAY</h2>
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

      <SiteFooter />
    </main>
  );
}

function App() {
  const pathname = window.location.pathname;

  function isKnownRoute(path) {
    const normalize = (p) => (p.endsWith('/') && p !== '/' ? p.slice(0, -1) : p);
    const p = normalize(path);
    const home = normalize(homePath);
    const about = normalize(aboutPath);

    if (p === about) return 'about';
    if (p === home) return 'home';
    return null;
  }

  const route = isKnownRoute(pathname);
  if (route === 'about') {
    return <AboutPage />;
  }

  if (route === 'home') {
    return <WeddingPage />;
  }

  return <NotFoundPage />;
}

export default App;
