import React from 'react';

function Project({ image, title, link, description }) {
  return (
    <div className="project" onClick={() => window.open(link, '_blank')}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
