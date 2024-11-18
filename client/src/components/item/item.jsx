import React, { useEffect } from 'react';
import './item.css'; // 引入样式文件

const Item = ({ experiences }) => {
  return (
    <div className="item-container">
      {experiences.map((experience, index) => (
        <div key={index}>
          {experience.sections.map((section, secIndex) => (
            <div key={secIndex} className="section">
              <h2 className="section-title">{section.title}</h2>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="experience-box">
                  <h3>{item.title}</h3>
                  {item.location && (
                    <p>
                      <strong>Location:</strong> {item.location}
                    </p>
                  )}
                  {item.date && (
                    <p>
                      <strong>Date:</strong> {item.date}
                    </p>
                  )}
                  {item.description && (
                    <div>
                      <strong>Description:</strong>
                      <p>{item.description}</p>
                    </div>
                  )}
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
      ))}
    </div>
  );
};


export default Item;