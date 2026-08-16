import { Link } from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="hero">
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
      </section>


      {/* ================= FEATURES ================= */}
      <section className="features">
        <div className="feature">
          <span>☕</span>
          <div>
            <h3>Premium Beans</h3>
            <p>Carefully selected from the world's finest origins.</p>
          </div>
        </div>

        <div className="feature">
          <span>🔥</span>
          <div>
            <h3>Small Batch Roasted</h3>
            <p>Roasted with precision for exceptional flavour.</p>
          </div>
        </div>

        <div className="feature">
          <span>🌱</span>
          <div>
            <h3>Ethically Sourced</h3>
            <p>Supporting farmers and sustainable coffee practices.</p>
          </div>
        </div>
      </section>


      {/* ================= SIGNATURE COFFEE ================= */}
      <section className="signature">
        <div className="section-heading">
          <p>OUR SIGNATURE</p>
          <h2>Made for Coffee Lovers</h2>
          <span>
            From bold espresso to smooth cold brews, every cup is crafted
            with intention.
          </span>
        </div>

        <div className="coffee-grid">

          <div className="coffee-card">
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
          </div>


          <div className="coffee-card">
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
          </div>


          <div className="coffee-card">
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
          </div>

        </div>

        <Link to="/menu" className="menu-btn">
          View Full Menu →
        </Link>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="experience">

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
            <div>
              <strong>01</strong>
              <span>Specialty Coffee</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Artisan Desserts</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Warm Ambience</span>
            </div>
          </div>

          <Link to="/contact" className="primary-btn">
            Discover Our Café
          </Link>
        </div>

      </section>


      {/* ================= QUOTE ================= */}
      <section className="quote">
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
      </section>


      {/* ================= CTA ================= */}
      <section className="home-cta">

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

      </section>

    </main>
  );
};

export default Home;