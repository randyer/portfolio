import React from 'react';

const TwoColumnList = ({ items }) => {
  return (
    <div className="two-column-list">
      {items.map((item, index) => (
        <div key={index} className="column-item">
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default TwoColumnList;
