import "./About.css";

function About() {
  return (
    <section className="about-section" id="About">
      <div className="about-container">
        
        <div className="about-image">
          <img src="/profilepic.jpg" alt="Chintamani Raghuwanshi" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hello! I'm <strong>Chintamani Raghuwanshi</strong>, a passionate
            Frontend Web Developer from Bengaluru, India. I enjoy creating
            responsive, modern, and user-friendly websites using the latest web
            technologies.
          </p>

          <p>
            My journey into web development started with curiosity about how
            websites work. Since then, I've learned HTML, CSS, JavaScript, and
            React, and I continue improving my skills by building real-world
            projects.
          </p>

          <p>
            My goal is to become a skilled Full Stack Developer and contribute
            to innovative software solutions while continuously learning new
            technologies.
          </p>

          <div className="about-info">
            <div>
              <h3>Location</h3>
              <span>Bengaluru, India</span>
            </div>

            <div>
              <h3>Experience</h3>
              <span>Frontend Developer</span>
            </div>

            <div>
              <h3>Email</h3>
              <span>chintamaniraghuwanshi@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;