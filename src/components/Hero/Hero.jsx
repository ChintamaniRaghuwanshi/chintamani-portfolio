import "./Hero.css";

function Hero() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">

        <div className="hero-text">
          <h1>
            {greeting}, <br />
            I'm <span>Chintamani Raghuwanshi</span> 👋
          </h1>

          <p>
            I'm a passionate Web Developer from Bengaluru who enjoys
            creating responsive and user-friendly web applications using
            HTML, CSS, JavaScript, and React.
          </p>

          <div className="hero-buttons">
            <a href="#Projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#Contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profilepic.jpg" alt="Chintamani Raghuwanshi" />
        </div>

      </div>
    </section>
  );
}

export default Hero;