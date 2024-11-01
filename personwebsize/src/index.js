import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
import reportWebVitals from './reportWebVitals';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#5E7C16',      // 主色：草绿色
                    colorLink: '#73C2FB',         // 链接色：天空蓝
                    colorLinkHover: '#3C9DB2',    // 链接悬停色：水蓝色
                    colorBgBase: '#8E8E86',       // 背景色：石头灰
                    colorTextBase: '#A36E2B',     // 文本色：土棕色
                },
            }}
        >
            <App />
        </ConfigProvider>
    </React.StrictMode>
);

reportWebVitals();
