import React from 'react';
import { Space } from 'antd';
import './index.css';

const baseStyle = {
    width: '100px',
    height: 40,
    margin: "10px",
    color: '#A36E2B',  // 文本色：土棕色
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    border: '2px solid rgb(163, 110, 43)', // 加边框来模仿像素风格
    backgroundColor: '#5E7C16', // 背景色：草绿色
    boxShadow: '3px 3px 0 #8E8E86', 
        
};

const flexStyle = {
    width: '100%',
    height:'60%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-around',

}

const Head = () => {
    return (
        <div style={{height:"20%"}}>
        {/** name Element */}
            <Space className="hade" direction="vertical" align="center" style={flexStyle}>
                <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#73C2FB',
                    textShadow: '2px 2px #8E8E86',
                    paddingRight:"100px"
                }} className="name">
                    Suyanqa
                </div>

                {/** Work & About & Resume Element */}
            <div className="navbar">
                {/* 导航菜单 */}
                <Space size="middle" style={{margin: '20px 0'}}>
                    {['Work', 'About', 'Resume'].map((text, i) => (
                        <div
                            key={i}
                            style={{
                                ...baseStyle,
                                backgroundColor: i % 2 ? '#5E7C16' : '#A36E2B',  // 交替颜色
                                color: '#FFFFFF',  // 统一设置文本颜色为白色
                            }}
                        >
                            {text}
                        </div>
                    ))}
                </Space>
            </div>
            </Space>
        </div>
    );
};

export default Head;
