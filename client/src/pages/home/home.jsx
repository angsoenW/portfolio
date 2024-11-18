import Head from "../../components/head/head";
import Content from "../../components/content/content";
import Item from "../../components/item/item";
import Footer from "../../components/footer/footer";
import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'

const Home = () => {
    // eslint-disable-next-line
    const experiences = [
        {
            "sections": [
                {
                    "title": "Experience",
                    "items": [
                        {
                            "title": "Software Engineer | Tripalink",
                            "location": "Seattle, WA",
                            "date": "May 2024 – Present",
                            "description": "Enhanced the Renty Portal by developing features to streamline application processes, archive legacy systems, and improve user interactions, contributing to optimized client-sales communication."
                        },
                        {
                            "title": "Volunteer | UW Gamer Group, Video Game History Foundation",
                            "location": "Seattle, WA",
                            "date": "Feb 2023 – Jun 2023",
                            "description": "Collaborated on game preservation by analyzing metadata and platform evolution for classics like the Game Boy and PS1, contributing insights into computational advancements impacting game design."
                        },
                        {
                            "title": "President | UW Chinese Debate Club",
                            "location": "Seattle, WA",
                            "date": "Jun 2022 – Jun 2023",
                            "description": "Led debate sessions and intercollegiate competitions, growing club membership by 30% and fostering a collaborative environment for critical discussion."
                        }
                    ]
                },
                {
                    "title": "Projects",
                    "items": [
                        {
                            "title": "Bearly There | Godot Engine",
                            "date": "2024",
                            "description": "Designed an interactive demo showcasing environmental storytelling, implementing advanced mechanics and physics-based behaviors, emphasizing grizzly bear habitat loss.",
                            "links": [
                                { "url": "https://github.com/angsoenW/BearlyThere", "text": "GitHub Repository" }
                            ]
                        },
                        {
                            "title": "SpeakPerfect | iOS Application",
                            "date": "2024",
                            "description": "Developed an app improving English pronunciation for non-native speakers, integrating real-time AI feedback loops and user-friendly UI with Swift.",
                            "links": [
                                { "url": "https://github.com/angsoenW/SpeakPerfect", "text": "GitHub Repository" }
                            ]
                        },
                        {
                            "title": "Unreal Fest VIP College Experience & iSchool Game Jam",
                            "date": "Oct 2024",
                            "description": "Won 'Most-Liked Track' for a giant-bedroom-themed map in Rocket Racing using Unreal Editor for Fortnite, gaining hands-on experience in scripting, level design, and industry networking.",
                            "links": [
                                { "url": "https://github.com/angsoenW/UEFN-GaintBedroom", "text": "GitHub Repository" }
                            ]
                        }
                    ]
                },
                {
                    "title": "Research",
                    "items": [
                        {
                            "title": "The AI Revolution in Higher Education",
                            "location": "Class Research | Seattle, WA",
                            "date": "Jan 2023 – Mar 2023",
                            "description": "Explored AI's impact on higher education, analyzing its effects on teaching and learning, and proposed actionable policy recommendations to enhance ethical integration."
                        },
                        {
                            "title": "Hearts of Iron IV Chinese Localization | 52PCGame",
                            "location": "Remote",
                            "date": "Mar 2020 – Current",
                            "description": "Led the translation and integration of Chinese localization using Python and XML for Paradox Interactive's Hearts of Iron IV, enabling an expanded player base and cultural accessibility.",
                            "links": [
                                { "url": "https://steamcommunity.com/sharedfiles/filedetails/?l=schinese&id=698748356", "text": "Steam Project" }
                            ]
                        }
                    ]
                },
                {
                    "title": "Leadership",
                    "items": [
                        {
                            "title": "Technology Chair & Actor | UW Chinese Theater Club",
                            "location": "Seattle, WA",
                            "date": "Oct 2022 – Jun 2024",
                            "description": "Directed a 3-hour play and managed technical aspects, including sound and lighting, enhancing creative production quality and audience engagement."
                        },
                        {
                            "title": "Member | UW Game Development Club",
                            "location": "Seattle, WA",
                            "date": "Mar 2023 – Jun 2024",
                            "description": "Contributed to the club's growth by hosting the 2023 Indie Game Jam and leading Unity and Godot learning sessions."
                        }
                    ]
                }
            ]
        }
    ];

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
                    <Item experiences={experiences} />
                </div>
            </div>
            <Footer fontFamily={fontFamily} style={{ position: 'relative' }} />
        </div>
    )
}

export default Home;