import React from 'react';
import { Space, Typography } from 'antd';

const { Paragraph } = Typography;

const footerStyle = {
    width: '100%',
    backgroundColor: '#5E7C16', // 背景色：草绿色
    color: '#A36E2B', // 文本色：土棕色
    textAlign: 'center',
    padding: '20px 0',
    position: 'absolute', // 让 footer 在页面底部
    bottom: 0,
};

const Footer = () => {
    return (
        <div style={footerStyle}>
            <Space direction="vertical">
                <Paragraph style={{ margin: 0, fontFamily: 'monospace', fontSize: '16px' }}>
                    © 2024 Suyanqa. All rights reserved.
                </Paragraph>
                <Paragraph style={{ margin: 0, fontFamily: 'monospace', fontSize: '16px' }}>
                    Follow us on social media!
                </Paragraph>
            </Space>
        </div>
    );
};

export default Footer;
