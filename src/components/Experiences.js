import React, { useState, useEffect } from "react";
import experiencesInfo from "../data/experiences.json";

import { SessionTitle, List } from "../styles/partials";

function Experiences() {
  const [experiences, setExperiences] = useState(["experiences"]);

  useEffect(() => setExperiences(experiencesInfo), []);

  return (
    <>
      <SessionTitle>
        <i className="fas fa-laptop-code" />
        Experiências
      </SessionTitle>
      <List>
        {experiences.map((exp, index) => {
          if (index < 5)
            return (
              <li key={index}>
                <i className="fas fa-terminal" />
                <strong>{exp.empresa}</strong>
                <p>
                  <i>{"- " + exp.cargo + " - "}</i>
                  <small>{exp.periodo}</small>
                </p>
                <p>
                  <small>{exp.descricao}</small>
                </p>
                <span>
                  <u>Ferramentas</u> {": " + exp.ferramentas}
                </span>
              </li>
            );
        })}
      </List>
    </>
  );
}

export default Experiences;
