import React from 'react';

function Project({ image, title, description, link }) {
  return (
    <div className="project" onClick={() => window.open(link, '_blank')}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;