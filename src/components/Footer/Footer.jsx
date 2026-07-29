import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Chintamani Raghuwanshi</h2>
          <p>Frontend Web Developer</p>
        </div>

        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#About">About</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:youremail@example.com"
          >
            Email
          </a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © {year} Chintamani Raghuwanshi. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;