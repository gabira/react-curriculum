import React from "react";
import { Header, Container, LeftColumn, RightColumn, Footer } from "./style";

import Personal from "../../components/Personal/index";
import Education from "../../components/Education";
import Skills from "../../components/Skills";
import Experiences from "../../components/Experiences";
import Courses from "../../components/Courses";

const Main = () => (
  <>
    <Header>
      <Personal />
    </Header>
    <Container>
      <LeftColumn>
        <Education />
        <Skills />
      </LeftColumn>
      <RightColumn>
        <Experiences />
      </RightColumn>
    </Container>
    <Footer>
      <Courses />
    </Footer>
  </>
);

export default Main;
