import React from 'react';
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './head.css';

const baseStyle = {
    height: '40px',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(0, 51, 102, 0.85)',
    border: 'none',
    padding: '0 15px',
    flexShrink: 1,
    minWidth: 0,
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
        <div className="glass-header">
            <div className="header-container">
                <div className="name">Shuoheng Wang</div>
                <div className="navbar">
                    <Dropdown overlay={workMenu} placement="bottom">
                        <div style={{ ...baseStyle, cursor: 'pointer' }} className="navbar-button">
                            Work
                        </div>
                    </Dropdown>
                    {['About', 'Resume'].map((text, i) => (
                        <Link to={`/${text.toLowerCase()}`} key={i}>
                            <div style={baseStyle} className="navbar-button">
                                {text}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Head;