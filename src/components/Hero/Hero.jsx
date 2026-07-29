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
    <section className="hero" id="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-greeting">{greeting}, 👋</p>

          <h1>
            I'm <span>Chintamani Raghuwanshi</span>
          </h1>

          <h2>Frontend React Developer</h2>

          <p className="hero-description">
            Passionate about building responsive, modern, and user-friendly web
            applications using HTML, CSS, JavaScript, React, and modern web
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#Projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#Contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src="/profilepic.jpg" alt="Chintamani Raghuwanshi" />
        </div>
      </div>
    </section>
  );
}

export default Hero;