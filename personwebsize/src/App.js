import React from 'react';
import Head from './components/head/head';
import Content from './components/content/content';
import Footer from './components/footer/footer'; 

function App() {
    const fontFamily = {
        fontFamily: '"Chakra Petch", sans-serif',  
        fontOpticalSizing: 'auto',
        fontWeight: 300,
        fontStyle: 'normal'
    }
    return (
        <>
            <Head/>
            <Content fontFamily={fontFamily}/>
            <Footer fontFamily={fontFamily}/>  
            
        </>
    );
}

export default App;