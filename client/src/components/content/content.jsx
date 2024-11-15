import React from 'react';
import { Typography, Image } from 'antd';
import image from '../../image/personImage.png';
import './content.css';

const { Title, Paragraph } = Typography;

const Content = ({ fontFamily }) => {
    return (
        <div className="info-container">
            <div className="glass-card">
                <div className="text-content">
                    <Title level={1} className="title">
                        Hi! You've reached Shuoheng!
                    </Title>
                    <Paragraph className="paragraph" style={fontFamily}>
                        I'm a programmer by profession, a gamer by passion, and an actor when the moment calls for it. From coding immersive worlds to diving into character roles on stage, I thrive on creativity and connection. Whether I’m debugging, gaming, or performing, I love building experiences that inspire, engage, and bring people together. Let’s create something unforgettable!
                    </Paragraph>
                    <Paragraph className="paragraph" style={fontFamily}>
                        📍 SWE @ Tripalink Seattle<br />
                        🌸 Proud UW Seattle Informatics Alumni<br />
                        🎮 OverWatch®2 Top 500 Support
                    </Paragraph>
                </div>
                <Image className="profile-image" src={image} alt="personImage" />
            </div>
        </div>
    );
};

export default Content;