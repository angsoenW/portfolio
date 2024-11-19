import Head from "../../components/head/head";
import Content from "../../components/content/content";
import Footer from "../../components/footer/footer";
import TimelineSlider from '../../components/timeline/TimelineSlider';
import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'

const Home = () => {

    const fontFamily = {
        fontFamily: '"Chakra Petch", sans-serif',
        fontOpticalSizing: 'auto',
        fontWeight: 300,
        fontStyle: 'normal',
    }

    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(WAVES({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                color: 0x75384,
                shininess: 50.00,
                waveHeight: 15.50,
                waveSpeed: 0.80,
                zoom: 0.5
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className="vanta" ref={myRef}>
            <Head />
            <div className="app-container">
                <div className="main-content">
                    <Content fontFamily={fontFamily} />
                    <TimelineSlider />
                </div>
            </div>
            <Footer fontFamily={fontFamily} />
        </div>
    )
}

export default Home;