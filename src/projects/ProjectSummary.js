import { Link } from "react-router-dom";

const ProjectSummary = (props) => {
  const { id, title, content } = props.project;
  return (
    <li key={id} className="list-unstyled">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-12 px-0">
          <h1 className="display-4 fst-italic">{title}</h1>
          <p className="lead my-3 text-truncate">{content}</p>
          <p className="lead mb-0"><Link to={ "/project/" + id } 
          className="text-white fw-bold">Continue reading...</Link></p>
        </div>
      </div>
    </li>
  );
};

export default ProjectSummary;