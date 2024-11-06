import React from 'react';
import { Typography } from 'antd';
import './index.css';

const { Paragraph } = Typography;

const footerStyle = {
    width: '100%',
    color: '#F0E68C',
    textAlign: 'center',
    // position: 'fixed',
    bottom: 0,
    backgroundColor: '#1f3a1f',
    borderTop: '4px solid #7d7a6e',
};

const Footer = ({ fontFamily }) => {
    return (
        <div className="footer" style={footerStyle}>
            <Paragraph style={{ margin: 0, ...fontFamily }}>
                © 2024 Shuoheng Wang |
                <a 
                    href="https://linkedin.com/in/shuoheng-wang-6962b4259"  
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: '#F0E68C', margin: '0 10px' }}
                >
                    LinkedIn
                </a>
                |
                <a 
                    href="https://github.com/angsoenW"  
                    target="_blank" 
                    rel="noreferrer"
                    style={{ color: '#F0E68C', margin: '0 10px' }}
                >
                    GitHub
                </a>
            </Paragraph>
        </div>
    );
};

export default Footer;