import React, { useState, useEffect, useRef } from 'react';
import Item from '../../components/item/item';
import Head from "../../components/head/head";
import Footer from "../../components/footer/footer";
import WAVES from 'vanta/dist/vanta.waves.min';

const Work = () => {
    const works = [
        {
            section: "Projects",
            items: [
                {
                    title: "Bearly There",
                    technology: "Godot Engine",
                    date: "2024",
                    description: "Designed an interactive game demo highlighting grizzly bear habitat loss through environmental storytelling. Implemented advanced mechanics using GDScript, focusing on physics-based behaviors and AI-controlled entities.",
                    links: [{ url: "https://github.com/angsoenW/BearlyThere", text: "GitHub Repository" }]
                },
                {
                    title: "SpeakPerfect",
                    technology: "iOS Application",
                    date: "2024",
                    description: "Developed an app to improve English pronunciation for non-native speakers, integrating real-time AI feedback and a user-friendly interface using Swift and UIKit.",
                    links: [{ url: "https://github.com/angsoenW/SpeakPerfect", text: "GitHub Repository" }]
                },
                {
                    title: "Rocket Racing Map",
                    technology: "Unreal Editor for Fortnite",
                    date: "Oct 2024",
                    description: "Won 'Most-Liked Track' award at the Unreal Fest Game Jam for designing a giant-bedroom-themed level, showcasing creativity in scripting, level design, and storytelling.",
                    links: [{ url: "https://github.com/angsoenW/UEFN-GaintBedroom", text: "GitHub Repository" }]
                }
            ]
        },{
            section: "Experience",
            items: [
                {
                    title: "Software Engineer",
                    organization: "Tripalink",
                    location: "Seattle, WA",
                    date: "May 2024 – Present",
                    description: "Developed innovative features for the Renty Portal, optimizing rental applications and enhancing client-sales communication. Maintained and archived legacy systems while integrating new functionalities to improve platform stability and user experience."
                },
                {
                    title: "President",
                    organization: "UW Chinese Debate Club",
                    location: "Seattle, WA",
                    date: "Jun 2022 – Jun 2023",
                    description: "Led debate sessions, organized intercollegiate competitions, and increased membership by 30%, fostering a collaborative environment for critical discussions and skill development."
                },
                {
                    title: "Volunteer",
                    organization: "UW Gamer Group & Video Game History Foundation",
                    location: "Seattle, WA",
                    date: "Feb 2023 – Jun 2023",
                    description: "Researched video game preservation for platforms like Game Boy and PS1. Contributed to the development of a comprehensive digital archive and provided insights into how computational advancements shaped game design."
                }
            ]
        },{
            section: "Research",
            items: [
                {
                    title: "The AI Revolution in Higher Education",
                    organization: "Class Research",
                    location: "Seattle, WA",
                    date: "Jan 2023 – Mar 2023",
                    description: "Investigated the impact of AI on higher education, analyzing its effects on learning, teaching, and academic integrity. Proposed actionable recommendations for ethical AI integration in universities."
                },
                {
                    title: "Hearts of Iron IV Chinese Localization",
                    organization: "52PCGame",
                    location: "Remote",
                    date: "Mar 2020 – Current",
                    description: "Led the Chinese localization process for Paradox Interactive's Hearts of Iron IV, utilizing Python and XML. Enhanced cultural accessibility, enabling a broader audience to engage with the game.",
                    links: [{ url: "https://steamcommunity.com/sharedfiles/filedetails/?l=schinese&id=698748356", text: "Steam Project" }]
                }
            ]
        },
        {
            section: "Leadership",
            items: [
                {
                    title: "Technology Chair & Actor",
                    organization: "UW Chinese Theater Club",
                    location: "Seattle, WA",
                    date: "Oct 2022 – Jun 2024",
                    description: "Directed a 3-hour play and managed technical production, including lighting and sound. Balanced creative and technical roles to deliver high-quality performances recognized within the university community."
                },
                {
                    title: "Member",
                    organization: "UW Game Development Club",
                    location: "Seattle, WA",
                    date: "Mar 2023 – Jun 2024",
                    description: "Hosted the 2023 Indie Game Jam and led game engine workshops, fostering technical growth and collaboration among members."
                }
            ]
        }
    ];

    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
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
    }, [vantaEffect]);

    return (
        <div className="vanta" ref={myRef}>
            <Head />
            <div className="app-container">
                <div className="main-content">
                    <Item works={works} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Work;