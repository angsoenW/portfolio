import React from 'react';
import './item.css';

const Item = ({ works }) => {
  return (
    <div className="item-container">
      {works.map((work, index) => (
        <div key={index} className="section">
          <h2 className="section-title">{work.section}</h2>
          {work.items.map((item, itemIndex) => (
            <div key={itemIndex} className="experience-box">
              <div className="experience-header">
                <h3>{item.title}</h3>
                <span className="experience-date-location">
                  ({item.date}, {item.location})
                </span>
              </div>
              <p>{item.description}</p>
              {item.links && item.links.length > 0 && (
                <div>
                  <strong>Links:</strong>
                  <ul>
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.text || 'View Link'}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Item;