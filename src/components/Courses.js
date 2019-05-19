import React, { useState, useEffect } from "react";
import coursesInfo from "../data/courses.json";

import { SessionTitle, List } from "../styles/partials";

function Courses() {
  const [courses, setCourses] = useState(["courses"]);

  useEffect(() => setCourses(coursesInfo), []);

  return (
    <>
      <SessionTitle>
        <i className="fas fa-coffee" />
        Cursos
      </SessionTitle>
      <List>
        {courses.map((i, index) => {
          if (index < 7)
            return (
              <li key={index} className="reduce-margin">
                <i className="fas fa-angle-double-right" />
                <strong>{i.nome}</strong>
                <span>{" - " + i.empresa + ", "}</span>
                <small>{i.periodo}</small>
              </li>
            );
        })}
      </List>
    </>
  );
}

export default Courses;
