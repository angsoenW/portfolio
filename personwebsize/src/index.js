import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Myrouter from './utils/router'
import App from './App';
import { ConfigProvider } from 'antd';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Myrouter>
            <React.StrictMode>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#5E7C16',      // 主色：草绿色
                            colorLink: '#73C2FB',         // 链接色：天空蓝
                            colorLinkHover: '#3C9DB2',    // 链接悬停色：水蓝色
                            colorBgBase: '#167168170',       // 背景色：
                            colorTextBase: '#C5893D',     // 更亮的文本色：沙棕色
                        },
                    }}
                >
                    <App />
                </ConfigProvider>
            </React.StrictMode>
        </Myrouter>
    </BrowserRouter>
);

reportWebVitals();
