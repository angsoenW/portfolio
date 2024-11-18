import { Typography, Divider } from 'antd';
import Head from '../../components/head/head'; // Import the Head component
import Footer from '../../components/footer/footer';
import './about.css';
import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'

const { Title, Paragraph } = Typography;

const About = () => {
    const fontFamily = {
        fontFamily: '"Chakra Petch", sans-serif',
        fontOpticalSizing: 'auto',
        fontWeight: 300,
        position: 'relative',
        fontStyle: 'normal',
    };

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
            <div className="outer-box glass-card">
                    <Typography style={{ color: '#333' }}>
                        <Title level={1} style={{ ...fontFamily, textAlign: 'center', marginBottom: '20px' }}>
                            About Me
                        </Title>
                        <Paragraph style={{ ...fontFamily, textAlign: 'justify' }}>
                            Hi there! My name is Shuoheng Wang (王硕恒), but you can also call me Jasper—a name I picked up to make introductions a bit easier for friends and colleagues. Growing up in Shangqiu, a historic city known as the cradle of the Shang Dynasty, I developed a passion for the stories, systems, and creativity that shape our world—a passion that would later lead me to game development.
                        </Paragraph>

                        <Divider />

                        <Title level={2} style={fontFamily}>A Programmer, Gamer, and Storyteller</Title>
                        <Paragraph style={{ ...fontFamily, textAlign: 'justify' }}>
                            I wear many hats in life: programmer by profession, gamer by passion, actor on occasion, and chef by curiosity. My journey with video games began even before I was born—my mother’s favorite pastime during pregnancy was playing Super Mario Brothers. Today, that legacy lives on as I strive to create immersive gaming experiences that captivate players across cultures.
                            <br /><br />
                            Professionally, I’m a software engineer at Tripalink, where I tackle diverse challenges, from developing software to designing gamified employee training tools. But my ultimate dream is to work on a AAA game title that becomes a household name. Someday, I want to introduce myself and hear people jokingly ask, “Can you give me hacks for that game?”
                        </Paragraph>

                        <Divider />

                        <Title level={2} style={fontFamily}>What Inspires Me</Title>
                        <Paragraph style={{ ...fontFamily, textAlign: 'justify' }}>
                            I’ve always been drawn to gaming not just as entertainment, but as a way to connect people and preserve stories. Whether it’s diving into the meticulously crafted universes of Stellaris or Cities: Skylines or completing iconic series like Hitman, Tomb Raider, and Assassin’s Creed, I’ve spent countless hours exploring the artistry and mechanics behind immersive storytelling. I’ve even taken this passion into VR, experimenting with new frontiers of gaming.
                            <br /><br />
                            Beyond gaming, I’m an avid cook and traveler—I’ve explored over 10 countries and have a growing list of destinations. My culinary experiments reflect my adventurous spirit, and I’m not shy about critiquing (or perfecting) a dish. Acting is another outlet for my creativity; I’ve taken on lead roles in three major plays and even directed one. Debate, too, has shaped my ability to analyze, articulate, and engage in meaningful discussions.
                        </Paragraph>

                        <Divider />

                        <Title level={2} style={fontFamily}>Fun Facts</Title>
                        <Paragraph style={{ ...fontFamily, textAlign: 'justify' }}>
                            <ul>
                                <li><strong>INTJ Personality:</strong> Strategic, goal-oriented, and endlessly curious.</li>
                                <li><strong>Gaming Milestones:</strong> Top 500 support player in Overwatch, with over 700 hours on Stellaris and 600 hours on Cities: Skylines.</li>
                                <li><strong>Unique Skills:</strong> I have an uncanny ability to pinpoint someone’s origin within China based on their dialect within minutes of conversation.</li>
                                <li><strong>Dreaming Big:</strong> I aspire to get my PADI scuba license someday—because why stop at exploring digital worlds when you can dive into real ones?</li>
                            </ul>
                        </Paragraph>

                        <Divider />

                        <Title level={2} style={fontFamily}>Let’s Connect</Title>
                        <Paragraph style={{ ...fontFamily, textAlign: 'justify' }}>
                            If you’d like to talk about the evolution of gaming, the nuances of Chinese dialects, or how technology intersects with social issues, I’d love to chat. My passion lies in using technology to inspire, engage, and tell stories that matter. Together, let’s push boundaries and create experiences that leave a mark.
                        </Paragraph>
                    </Typography> 
            </div>
            <Footer fontFamily={fontFamily} style={{ position: 'relative' }} />
        </div>

    );
};

export default About;