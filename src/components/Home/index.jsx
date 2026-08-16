import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import './index.css'

const Home = () => {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <Reveal as="section" className="hero" direction="up" delay={0.05}>
        <div className="hero-content">
          <p className="hero-tag">CRAFTED WITH PASSION</p>

          <h1>
            Every Cup Has
            <span> A Story.</span>
          </h1>

          <p className="hero-description">
            Discover exceptional coffee, handcrafted with carefully selected
            beans and served in an atmosphere designed to slow life down.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-btn">
              Explore Our Menu
            </Link>

            <Link to="/" className="secondary-btn">
              Our Story →
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Premium coffee"
          />

          <div className="hero-badge">
            <span>☕</span>
            <div>
              <strong>Freshly Brewed</strong>
              <small>Every single day</small>
            </div>
          </div>
        </div>
      </Reveal>


      {/* ================= FEATURES ================= */}
      <section className="features">
        <Reveal as="div" className="feature" direction="up" delay={0.08}>
          <span>☕</span>
          <div>
            <h3>Premium Beans</h3>
            <p>Carefully selected from the world's finest origins.</p>
          </div>
        </Reveal>

        <Reveal as="div" className="feature" direction="up" delay={0.14}>
          <span>🔥</span>
          <div>
            <h3>Small Batch Roasted</h3>
            <p>Roasted with precision for exceptional flavour.</p>
          </div>
        </Reveal>

        <Reveal as="div" className="feature" direction="up" delay={0.2}>
          <span>🌱</span>
          <div>
            <h3>Ethically Sourced</h3>
            <p>Supporting farmers and sustainable coffee practices.</p>
          </div>
        </Reveal>
      </section>


      {/* ================= SIGNATURE COFFEE ================= */}
      <Reveal as="section" className="signature" direction="up" delay={0.1}>
        <div className="section-heading">
          <p>OUR SIGNATURE</p>
          <h2>Made for Coffee Lovers</h2>
          <span>
            From bold espresso to smooth cold brews, every cup is crafted
            with intention.
          </span>
        </div>

        <div className="coffee-grid">

          <Reveal as="div" className="coffee-card" direction="up" delay={0.06}>
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
              alt="Espresso"
            />

            <div className="coffee-info">
              <div>
                <h3>Classic Espresso</h3>
                <p>Rich · Bold · Intense</p>
              </div>

              <strong>₹180</strong>
            </div>
          </Reveal>


          <Reveal as="div" className="coffee-card" direction="up" delay={0.12}>
            <img
              src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7"
              alt="Cappuccino"
            />

            <div className="coffee-info">
              <div>
                <h3>Velvet Cappuccino</h3>
                <p>Silky · Creamy · Balanced</p>
              </div>

              <strong>₹220</strong>
            </div>
          </Reveal>


          <Reveal as="div" className="coffee-card" direction="up" delay={0.18}>
            <img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
              alt="Cold Brew"
            />

            <div className="coffee-info">
              <div>
                <h3>Signature Cold Brew</h3>
                <p>Smooth · Refreshing · Bold</p>
              </div>

              <strong>₹240</strong>
            </div>
          </Reveal>

        </div>

        <Link to="/menu" className="menu-btn">
          View Full Menu →
        </Link>
      </Reveal>


      {/* ================= EXPERIENCE ================= */}
      <Reveal as="section" className="experience" direction="left" delay={0.08}>

        <div className="experience-image">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
            alt="Coffee shop interior"
          />
        </div>

        <div className="experience-content">
          <p>THE EXPERIENCE</p>

          <h2>
            More Than
            <br />
            Just Coffee.
          </h2>

          <p className="experience-text">
            A place to meet, create, relax and reconnect. Our café is designed
            around the belief that great coffee tastes even better when shared
            with good company.
          </p>

          <div className="experience-list">
            <Reveal as="div" direction="up" delay={0.08}>
              <strong>01</strong>
              <span>Specialty Coffee</span>
            </Reveal>

            <Reveal as="div" direction="up" delay={0.14}>
              <strong>02</strong>
              <span>Artisan Desserts</span>
            </Reveal>

            <Reveal as="div" direction="up" delay={0.2}>
              <strong>03</strong>
              <span>Warm Ambience</span>
            </Reveal>
          </div>

          <Link to="/contact" className="primary-btn">
            Discover Our Café
          </Link>
        </div>

      </Reveal>


      {/* ================= QUOTE ================= */}
      <Reveal as="section" className="quote" direction="up" delay={0.08}>
        <div>
          <span>“</span>

          <h2>
            Good coffee.
            <br />
            Good moments.
            <br />
            <em>Good memories.</em>
          </h2>

          <p>
            Take a moment. Take a sip. Stay a little longer.
          </p>
        </div>
      </Reveal>


      {/* ================= CTA ================= */}
      <Reveal as="section" className="home-cta" direction="up" delay={0.12}>

        <p>YOUR NEXT FAVOURITE CUP</p>

        <h2>
          Your Perfect Cup
          <br />
          Is Waiting.
        </h2>

        <p>
          Come in, sit back, and let us make your day a little better.
        </p>

        <button className="primary-btn" onClick={() => window.open('https://maps.app.goo.gl/ML56nynavyKNGykA9', '_blank', 'noopener,noreferrer')}>
          Visit Our Café →
        </button>

      </Reveal>

    </main>
  );
};

export default Home;