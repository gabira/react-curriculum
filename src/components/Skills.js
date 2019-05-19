import React, { useState, useEffect } from "react";
import skillsList from "../data/skills.json";

import { SessionTitle, SkillsList } from "../styles/partials";
import Evaluation from "./Evaluation";

function Skills() {
  const [skills, setSkills] = useState(["skills"]);

  useEffect(() => setSkills(skillsList), []);

  return (
    <>
      <SessionTitle>
        <i className="fas fa-code" />
        Habilidades
      </SessionTitle>
      <SkillsList>
        {skills.map((skill, index) => (
          <li key={index}>
            <Evaluation number={skill.nivel} />
            <span>{"- " + skill.nome}</span>
          </li>
        ))}
      </SkillsList>
    </>
  );
}

export default Skills;
