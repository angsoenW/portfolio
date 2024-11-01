import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const contentStyle = {
    width: '90%',
    margin: '20px auto',
    padding: '10px',
    border: '2px solid #3C9DB2',
    backgroundColor: '#5E7C16',
    boxShadow: '3px 3px 0 #8E8E86',
    color: '#A36E2B',
    fontFamily: 'monospace',
    fontSize: '16px',
};

const Content = () => {
    return (
        <div style={contentStyle}>
            <Title level={2} style={{ color: '#73C2FB', textShadow: '1px 1px #8E8E86', margin: 0 }}>
                关于海獺
            </Title>
            <Paragraph style={{ color: '#A36E2B' }}>
                海獺是一种非常可爱的海洋生物，喜欢在水中嬉戏。
                它们以海胆和鱼类为食，是生态系统的重要一部分。
                海獺不仅外形可爱，还有着非常聪明的智力和社交能力。
            </Paragraph>
        </div>
    );
};

export default Content;