import React from "react";

import { ProjectCard } from "../../../components/common/ProjectCard";

export const ProjectsList = ({ projects }) => {
  return <div className="row">
      {projects.map(item => <ProjectCard key={item._id} project={item} />)}
  </div>
}
