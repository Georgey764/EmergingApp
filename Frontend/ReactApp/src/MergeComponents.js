import React from "react";
import HomePageProfessor from "./ProfessorComponents/Page1/homepage.js";
import HomePageStudent from "./StudentComponents/Page1/HomePageStudent.js";

function MergeComponents(props) {
  return (
    <div>
      {props.authority === "ROLE_FACULTY" ? (
        <HomePageProfessor />
      ) : props.authority === "ROLE_STUDENT" ? (
        <HomePageStudent />
      ) : (
        <div>nothing</div>
      )}
    </div>
  );
}

export default MergeComponents;
