import React from 'react';

function Project({ image, title, link }) {
  return (
    <div className="project" onClick={() => window.open(link, '_blank')}>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="image-overlay"></div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
      </div>
    </div>
  );
}


export default Project;