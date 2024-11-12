import React from 'react';
import { Space, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

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
    borderRadius: '8px',
    border: '2px solid var(--ant-primary-color)',
    backgroundColor: 'var(--ant-primary-color)',
    boxShadow: '3px 3px 0 rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
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
        <div className="head">
            <Space className="head-content" direction="vertical" align="center">
                <div className="name">
                    Shuoheng Wang
                </div>

                <div className="navbar">
                    <Space size="middle">
                        <Dropdown overlay={workMenu} placement="bottom">
                            <div style={{ ...baseStyle, cursor: 'pointer' }}>
                                Work
                            </div>
                        </Dropdown>
                        {['About', 'Resume'].map((text, i) => (
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
