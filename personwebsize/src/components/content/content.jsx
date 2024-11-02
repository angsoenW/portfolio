import React, { useState } from 'react';
import { Typography, Image } from 'antd';
import image from '../../image/personImage.png';
import { DoubleLeftOutlined } from "@ant-design/icons";
// eslint-disable-next-line
import Item from '../item/item';

const { Title, Paragraph } = Typography;

// 父元素样式
const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '50px 10%',
    flexDirection: 'row-reverse', // 保持反转
    position: 'relative', // 设置相对定位
    maxWidth: '1200px', // 设置最大宽度
    margin: '0 auto', // 居中容器
};

// 卡片样式
const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '60%',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
};

// 图片样式
const imageStyle = {
    width: '80%',
    height: "100%",
    maxWidth: '600px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginLeft: "34%",
};

// 标题样式
const titleStyle = {
    color: '#003366',
    fontFamily: '"Chakra Petch", sans-serif',
    fontWeight: 300,
};

// 文本样式
const paragraphStyle = {
    color: 'rgba(0, 51, 102, 0.8)',
    margin: '0 0 10px',
};

// 链接样式
const linkStyle = {
    color: '#FFA500',
    textDecoration: 'none',
};

// 图标样式
const iconStyle = {
    fontSize: '40px',
    transform: 'translateX(-50%) rotate(-90deg)', // 翻转图片
    position: 'absolute',
    bottom: '-5%', // 间距
    left: '50%',    // 水平居中
    color: "#4999500"
};


const Content = ({ fontFamily }) => {

    return (
        <div style={containerStyle} className='hero'>
            <Image style={imageStyle} src={image} alt='personImage' />
            <div style={cardStyle}>
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
            <DoubleLeftOutlined style={iconStyle} />
        </div>
    );
};

export default Content;