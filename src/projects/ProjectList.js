import ProjectSummary from "./ProjectSummary"

const ProjectList = ({projects}) => {
  const projectList =  projects && projects.map(project => <ProjectSummary key={project.id} project={project} />);
  return (
    <div className="container">
      <ul>
        {projectList}
      </ul>
    </div>
  );
};

export default ProjectList;