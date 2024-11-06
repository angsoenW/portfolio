import React from 'react';
import { Space, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.css'

const baseStyle = {
    width: '100px',
    height: '40px',
    margin: "10px",
    color: 'var(--ant-primary-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '8px',                  // 圆角
    border: '2px solid var(--ant-primary-color)',
    backgroundColor: 'var(--ant-primary-color)',  // 主色
    boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.2)', // 阴影
    transition: 'all 0.3s ease',          // 过渡效果
};

const flexStyle = {
    width: '100%',
    height: '60%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-around',
};

const workMenu = (
    <Menu className="project-father">
        <Menu.Item key="1" className="project">
            <Link to="/project">My project details.</Link>
        </Menu.Item>
    </Menu>
);

const Head = () => {
    return (
        <div style={{ height: "20%" }}>
            <Space className="head" direction="vertical" align="center" style={flexStyle}>
                <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'var(--ant-color-link)',
                    textShadow: '2px 2px rgba(0, 0, 0, 0.2)',
                    paddingRight: "100px"
                }} className="name">
                    Shuoheng Wang
                </div>

                <div className="navbar">
                    <Space size="middle" style={{ margin: '20px 0' }}>
                        <Dropdown overlay={workMenu} placement="bottom">
                            <div style={{ ...baseStyle, cursor: 'pointer' }}>
                                Work
                            </div>
                        </Dropdown>
                        {[ 'About', 'Resume' ].map((text, i) => (
                            <Link to={`/${text.toLowerCase()}`} key={i}>
                                <div style={{
                                    ...baseStyle,
                                    backgroundColor: i % 2 ? 'var(--ant-primary-color)' : 'var(--ant-color-link-hover)',
                                    color: 'var(--ant-color-text-base)',
                                }}>
                                    {text}
                                </div>
                            </Link>
                        ))}
                    </Space>
                </div>
            </Space>
        </div>
    );
};

export default Head;
