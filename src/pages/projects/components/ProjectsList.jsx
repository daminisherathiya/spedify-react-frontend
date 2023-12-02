import React from "react";

import { ProjectCard } from "../../../components/common/ProjectCard";

export const ProjectsList = ({ projects }) => {
  return <div className="row">
      {
        (projects.length > 0)
        ? projects.map(item => <ProjectCard key={item._id} project={item} />)
        : <div className="col h5 text-center text-muted my-4">No project found, try adjusting the filters.</div>
      }
  </div>
}
