import React from 'react';
import { Tooltip } from 'react-tooltip'
import TwoColumnList from './TwoColumnList';


const TriPanel = ({ sectionData }) => {
  const borderStyle = {backgroundColor: '#F4F1DE', width: '1px'}
  return (
    <div className="panel-container">
      <div className="panel">
        <h2>{sectionData[0].title}</h2>
        <TwoColumnList items={sectionData[0].items}></TwoColumnList>
      </div>
      <div style={borderStyle}></div>

      <div className="panel">
        <h2>{sectionData[1].title}</h2>
        {sectionData[1].images.map((image, index) => (
          <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="panel-image"
          data-tooltip-id="my-tooltip" data-tooltip-content={image.alt}
        />
        ))}
      </div>
      <div style={borderStyle}></div>

      <div className="panel">
        <h2>{sectionData[2].title}</h2>
        <TwoColumnList items={sectionData[2].items}></TwoColumnList>
        
      </div>
      <Tooltip id="my-tooltip" />
      </div>
  );
};



export default TriPanel;
