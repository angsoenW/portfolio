import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Myrouter from './utils/router'
import App from './App';
import { ConfigProvider } from 'antd';

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Myrouter>
            <React.StrictMode>
                <ConfigProvider>
                    <App />
                </ConfigProvider>
            </React.StrictMode>
        </Myrouter>
    </BrowserRouter>
);