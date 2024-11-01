import React, { useEffect } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

// 背景色和图片
const backgroundStyle = {
    backgroundSize: 'cover', // 使背景图覆盖整个容器
    backgroundPosition: 'center', // 背景图居中
    padding: '50px 20px',
    textAlign: 'center', // 文本居中
    height: '100vh', // 使容器填满整个视口高度
};

// 卡片样式
const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // 半透明白色背景
    borderRadius: '10px', // 圆角
    padding: '20px',
    margin: '10px auto',
    maxWidth: '80%', // 最大宽度
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // 阴影效果
};



const titleStyle = {
    color: '#003366',          // 深蓝色文本
    margin: '0 0 10px',
    fontFamily: '"Chakra Petch", sans-serif',  
    fontOpticalSizing: 'auto',
    fontWeight: 300,
    fontStyle: 'normal'
};


const paragraphStyle = {
    color: 'rgba(0, 51, 102, 0.8)', 
    margin: '0 0 10px', 
};

// 链接样式
const linkStyle = {
    color: '#FFA500', // 强调色：橙色
    textDecoration: 'none',
};

const Content = ({fontFamily}) => {

    return (
        <div style={backgroundStyle}>
            <div className='111' style={cardStyle}>
                <Title level={1} style={titleStyle}>
                    Hi! I am Suyanqa
                </Title>
                <Paragraph style={{ ...paragraphStyle, ...fontFamily }}>
                    🌱 I’m currently learning and expanding my skills in Spring Boot and React to build robust and efficient web applications.
                </Paragraph>
                <Paragraph style={{ ...paragraphStyle, ...fontFamily }}>
                    💞️ I’m looking to collaborate on projects involving Spring Boot or React development.
                </Paragraph>
                <Paragraph style={{ ...paragraphStyle, ...fontFamily }}>
                    📫 You can reach me at <a href="mailto:suyan1254088@gmail.com" style={linkStyle}>suyan1254088@gmail.com</a>.
                </Paragraph>
                <Paragraph style={{ ...paragraphStyle, ...fontFamily }}>
                    😄 Pronouns: ABC (Always Be Coding)
                </Paragraph>
                <Paragraph style={{ ...paragraphStyle, ...fontFamily }}>
                    ⚡ Fun fact: I like to communicate with people, so that we can all gain experience from communication.
                </Paragraph>
            </div>
        </div>
    );
};

export default Content;
