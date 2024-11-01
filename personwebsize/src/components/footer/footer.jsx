import React from 'react';
import { Typography } from 'antd';
import'./index.css'

const { Paragraph } = Typography;

// 页脚样式
const footerStyle = {
    width: '100%',
    height: "20%",
    color: '#F0E68C', // 文本色：淡黄色
    textAlign: 'center',
    padding: '20px 0',
    position: 'absolute', // 让 footer 在页面底部
    bottom: 0,
};

const Footer = ({fontFamily}) => {
    return (
        <div style={footerStyle}>
            <Paragraph style={{ margin: 0,...fontFamily }}>
                © 2024 Shuoheng Wang |
                <a href="https://linkedin.com/in/shuoheng-wang-6962b4259" target="_blank" style={{ color: '#F0E68C', margin: '0 10px' }}>
                LinkedIn
                </a>
                |
                <a href="https://github.com/angsoenW" target="_blank" style={{ color: '#F0E68C', margin: '0 10px' }}>
                    GitHub
                </a>
            </Paragraph>
        </div>
    );
};

export default Footer;
