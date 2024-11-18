// footer.jsx
import React from 'react';
import { Typography } from 'antd';
import './footer.css';

const { Paragraph } = Typography;

const Footer = ({ fontFamily }) => {
    return (
        <div className="footer">
            <Paragraph style={{ margin: 0, ...fontFamily, "fontSize": '1.2rem' }}>
                © 2024 Shuoheng Wang |
                <a
                    href="https://linkedin.com/in/shuoheng-wang-6962b4259"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                |
                <a
                    href="https://github.com/angsoenW"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </Paragraph>
        </div>
    );
};

export default Footer;