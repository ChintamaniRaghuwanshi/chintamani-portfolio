import "./Skill.css";

function Skill() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Git & GitHub", level: 75 }
  ];

  return (
    <section className="skills-section" id="Skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-subtitle">
          Technologies I use to build responsive and modern web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;