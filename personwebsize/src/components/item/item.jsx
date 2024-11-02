import React from 'react';

// Item 组件用于渲染经历
const Item = ({ experiences }) => {
    return (
        <div>
            {experiences.map((experience, index) => (
                <div key={index} style={styles.experienceBox}>
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
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            {link}
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

// 样式对象（可以根据需要进行修改）
const styles = {
    experienceBox: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '16px',
        margin: '16px 0',
        backgroundColor: '#f9f9f9',
    },
};

export default Item;
