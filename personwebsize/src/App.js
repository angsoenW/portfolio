import React from 'react';
import Head from './components/head/head';
import Content from './components/content/content';
import Footer from './components/footer/fotter'; // 引入 Footer 组件

function App() {
    return (
        <>
            <Head />
            <Content />
            <Footer />  {/* 添加 Footer 组件 */}
        </>
    );
}

export default App;
