import React from 'react';

function ProjectDetails(props) {
  const id = props.match.params.project_id;
  console.log(id);
  return (
    <div className="p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Punny headline</h1>
      <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <a className="text-decoration-underline text-muted" href="/">STM</a>
      <p className="footer text-muted">5 September, 2015</p>
    </div>
  </div>
  );
}

export default ProjectDetails;
