import React from "react";

const ProjectItems = ({ project }) => {
  return (
    <div className="carousel-item">
      <div></div>
      <img className="carousel-img" src={project.image.default} />
      <div className="carousel-title">{project.name}</div>
    </div>
  );
};

export default ProjectItems;
