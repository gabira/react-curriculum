import React, { useState, useEffect } from "react";
import education from "../data/education.json";

import { SessionTitle, List } from "../styles/partials";

function Education() {
  const [info, setInfo] = useState(["educational info"]);

  useEffect(() => setInfo(education), []);

  return (
    <>
      <SessionTitle>
        <i className="fas fa-user-graduate" />
        Formação
      </SessionTitle>
      <List>
        {info.map((i, index) => (
          <li key={index}>
            <i className="fa fa-certificate" />
            <strong>{i.instituicao}</strong>
            <p>{i.curso}</p>
            <span>{i.situacao}</span>
          </li>
        ))}
      </List>
    </>
  );
}

export default Education;
