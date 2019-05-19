import React, { useState, useEffect } from "react";
import moment from "moment";
import personalInfo from "../../data/personalInfo.json";

import "./style.scss";

function Personal() {
  function getAge(birthday) {
    const birthdate = moment(birthday);
    const age = moment().diff(birthdate, "years");
    return age;
  }

  const [info, setInfo] = useState("personal info");

  useEffect(() => {
    personalInfo.idade = getAge(personalInfo.nascimento);
    setInfo(personalInfo);
  }, []);

  return (
    <>
      <h2>{info.nome}</h2>
      <div className="flex-container personal-info">
        <div className="flex-column">
          <ul>
            <li>
              <i className="fas fa-map-marked-alt" />
              {info.endereco}
            </li>
            <li>
              <i className="far fa-envelope" />
              {info.email}
            </li>
            <li>
              <i className="fas fa-mobile-alt" />
              {info.celular}
            </li>
          </ul>
        </div>
        <div className="flex-column">
          <ul>
            <li>
              <i className="fas fa-birthday-cake" />
              {`${info.idade} anos`}
            </li>
            <li>
              <i className="fa fa-id-card" />
              {`CNH: ${info.cnh}`}
            </li>
            <li>
              <i className="fab fa-github" />
              {info.github}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Personal;
