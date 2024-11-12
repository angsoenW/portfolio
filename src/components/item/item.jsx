import React, { useEffect } from 'react';
import './index.css'; // 引入样式文件

const Item = ({ experiences }) => {
    useEffect(() => {
        console.log("experiences:", experiences);
        console.log("Item count:", experiences.length);
    }, [experiences]);

    return (
        <div className="item-container">
            {experiences.map((experience, index) => (
                <div key={index} className="experience-box">
                    <h2>{experience.title}</h2>
                    {experience.location && <p><strong>Location:</strong> {experience.location}</p>}
                    {experience.date && <p><strong>Date:</strong> {experience.date}</p>}
                    {experience.description && (
                        <div>
                            <strong>Description:</strong>
                            <ul>
                                {experience.description.map((desc, descIndex) => (
                                    <li key={descIndex}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {experience.links && experience.links.length > 0 && (
                        <div>
                            <strong>Links:</strong>
                            <ul>
                                {experience.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            {link.text || "View Document"}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Item;