import React from 'react';
import { Dropdown } from 'antd';
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

const workMenu = {
  items: [
    {
      key: '1',
      label: <Link to="/project">My project details.</Link>,
    },
  ],
};

const Head = () => {
  return (
    <div className="glass-header">
      <div className="header-container">
        <Link to="/" className="name">Shuoheng Wang</Link>
        <div className="navbar">
          <Dropdown menu={workMenu} placement="bottom">
            <div style={{ ...baseStyle, cursor: 'pointer' }} className="navbar-button">
              Work
            </div>
          </Dropdown>
          {['About', 'Resume'].map((text, i) => {
            if (text === 'Resume') {
              return (
                <a
                  href="https://drive.google.com/file/d/1g9SJWaB1kEonryEUG0YorsD47FP0VKVj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  style={baseStyle}
                  className="navbar-button"
                >
                  {text}
                </a>
              );
            } else {
              return (
                <Link to={`/${text.toLowerCase()}`} key={i}>
                  <div style={baseStyle} className="navbar-button">
                    {text}
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Head;