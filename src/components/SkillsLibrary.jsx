import React from 'react';

const SkillsLibrary = ({ skills }) => {
  return (
    <section id="skills" className="content-row">
      <h2 className="row-title">
        Skills Library
      </h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.id} className="skill-category">
            <h3 className="skill-title">
              {skill.title}
            </h3>
            <div className="skills-list">
              {skill.skills.map((item, index) => (
                <span
                  key={index}
                  className="skill-tag"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsLibrary;
