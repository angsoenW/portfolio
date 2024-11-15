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
            title: "Researcher | Class Research",
            location: "Seattle, WA",
            date: "Jan 2023 – Mar 2023",
            description: [
                "Conducted a thorough study on the impact of Artificial Intelligence (AI) in higher education among students and professors.",
                "Designed and implemented a mixed-method research approach, combining surveys, interviews, and observations.",
                "Analyzed AI tools' effects on learning, teaching, and academic integrity, highlighting both benefits and ethical risks.",
                "Produced a detailed report with actionable recommendations for universities on AI integration, contributing to policy discussions."
            ],
            links: [
                {
                    url: "https://docs.google.com/document/d/1yapH2hIyEIQyhhjFrkbgjr5lGzAeUfWYRfrbH3mnTzA/edit?usp=sharing",
                    text: "The AI Revolution in Higher Education: Exploring the Impact of AI on Students and Professors in College"
                }
            ]
        },
        {
            title: "Volunteer | UW Gamer Group, Video Game History Foundation",
            location: "Seattle, WA",
            date: "Feb 2023 – Jun 2023",
            description: [
                "Researched the availability and preservation of video games across archived platforms, including Game Boy, PS1, and Nintendo 64.",
                "Analyzed game design strategies and metadata classification to assess the evolution of game architectures over time.",
                "Collaborated with a multidisciplinary team to document and preserve classic games, contributing to the creation of a comprehensive digital archive.",
                "Developed actionable insights into how advancements in computational power have influenced game design, presented to the Video Game History Foundation."
            ]
        },
        {
            title: "Unreal Fest VIP College Experience & iSchool Game Jam | UW Representative",
            location: "Seattle, WA",
            date: "Oct 2024",
            description: [
                "Represented UW at the Unreal Fest, attended exclusive sessions with Epic Games professionals, and explored cutting-edge trends in game development.",
                "Participated in workshops and presentations on Unreal Engine, networking with industry leaders to explore game development trends and next-gen platforms.",
                "Designed and developed a giant-bedroom-themed level in Rocket Racing using Unreal Editor for Fortnite during the iSchool Game Jam.",
                "Awarded 'Most-Liked Track' by all participants for innovative mechanics and unique storytelling within the game."
            ],
            links: [
                {
                    url: "https://github.com/angsoenW/UEFN-GaintBedroom",
                    text: "giant-bedroom-themed level"
                }
            ]
        },
        {
            title: "Seattle Indies Expo (SIX) | Bad Zombie Games Representative",
            location: "Seattle, WA",
            date: "Sep 2024",
            description: [
                "Engaged with attendees by providing in-depth demonstrations, answering technical and gameplay-related questions, and gathering valuable feedback.",
                "Collaborated with the development team to present the game’s unique features and design philosophy.",
                "Networked with developers and industry experts to discuss potential collaborations and current trends in game development.",
                "Explained complex game mechanics to a broad audience, enhancing the game's visibility and user interest."
            ]
        },
        {
            title: "Bearly There | Godot Engine Project",
            date: "2024",
            description: [
                "Developed a fully playable demo level using the Godot engine, focusing on advanced level design, character mechanics, and environmental storytelling.",
                "Designed and refined game prototypes, conducted playtesting to gather user feedback, and enhanced game engagement and usability.",
                "Created comprehensive documentation, including design documents and a demo video, for peer and instructor presentations."
            ],
            links: [
                {
                    url: "https://drive.google.com/drive/folders/0BxLReSzonxI4fjNvVVFWalgzT1F2cFMtbFZCZzVvRm9kcG1ZcHBkeTRfYkxSTk9TTzE4Wk0?resourcekey=0-dOn9YGb5ZHaQPo80qdnB0g&usp=sharing",
                    text: "Bearly There"
                },
                {
                    url: "https://github.com/angsoenW/BearlyThere",
                    text: "demo level"
                }
            ]
        },
        {
            title: "SpeakPerfect | iOS App",
            date: "2024",
            description: [
                "Designed and implemented an iOS app to improve English pronunciation for non-native speakers through conversation simulations using Speechace and chatbot APIs.",
                "Integrated real-time feedback features to boost user engagement and learning outcomes."
            ],
            links: [
                {
                    url: "https://github.com/angsoenW/SpeakPerfect",
                    text: "SpeakPerfect"
                }
            ]
        },
        {
            title: "What You Got Left | Capstone Project",
            date: "2024",
            description: [
                "Led the full-stack development of a capstone project to reduce food waste among college students by tracking ingredients, generating recipes, and reminding of expiration dates.",
                "Integrated robust API functionality for seamless front-end and back-end operations, including user authentication and data storage.",
                "Played a key role in user research and testing to ensure feature alignment with user needs."
            ],
            links: [
                {
                    url: 'https://ischool.uw.edu/capstone/projects/2024/what-you-got-left-recipe-generation-and-ingredient-tracking-website-help',
                    text: 'What You Got Left'
                },
                {
                    url: 'https://test.jazelizer.me/',
                    text: 'Capstone Project'
                },
                {
                    url: 'https://github.com/angsoenW/INFO_490_Capstone',
                    text: 'full-stack development'
                }

            ]
        },
        {
            title: "Info314-TicTacToeRFC | Java",
            date: "2023",
            description: [
                "Developed a command-line interface-based multiplayer Tic-Tac-Toe game adhering to specific RFC protocols.",
                "Enhanced the game’s functionality by integrating network programming concepts and ensuring robust communication between players."
            ],
            links: [
                {
                    url: 'https://github.com/weifanwu/info314-TicTacToeRFC',
                    text: 'Info314-TicTacToeRFC'
                },
            ]
        },
        {
            title: "Architecture Analysis on Material UI | Project Report",
            date: "2023",
            description: [
                "Conducted an in-depth analysis of Material UI's architecture, focusing on development practices,application scenarios, and design patterns.",
                "Identified performance enhancement opportunities, proposing targeted improvements that led toactionable recommendations for system optimization."
            ],
            links: [
                {
                    url: 'https://github.com/Info-443-Spring-2023/project-2-material-ui',
                    text: 'Architecture Analysis on Material UI'
                },
            ]
        },
        {
            title: "SubMax: Final Design Document | Mobile Application Design",
            date: "2023",
            description: [
                "Spearheaded the design and prototyping of SubMax, a mobile application aimed at optimizing subscription management for college students. ",
                "Developed a comprehensive user interface using Figma, and streamlined the app's features to enhance user experience and cost management with a focus on data informativity and user interactivity. ",
                "Identified user needs through research, ideating potential solutions, and outlining a clear development roadmap."
            ],
            links: [
                {
                    url: 'https://docs.google.com/document/d/1IGsILTTB3QvMQg5cQgvMlEWI9x1xfh76Y2kBDSjb00A/edit?usp=sharing',
                    text: 'SubMax: Final Design Document'
                },
            ]
        },
        {
            title: "iUW: Systems Analysis and Design Document | Product Development & Management Document",
            date: "2023",
            description: [
                "Created a vision and scope document for an alumni information system, integrating enterprise architecture to improve alumni-student engagement. ",
                "Led the design and implementation of the system's features, focusing on data management, user experience and stakeholder relationships."
            ],
            links: [
                {
                    url: 'https://docs.google.com/document/d/1KtJmlkBVM5BBNJNW3VBw2addbI2eETt4A74Fzf0wg_o/edit?usp=sharing',
                    text: 'iUW: Systems Analysis and Design Document'
                },
            ]
        },
        {
            title: "President | UW Chinese Debate Club",
            location: "Seattle, WA",
            date: "Jun 2022 – Jun 2023",
            description: [
                "Led weekly meetings, organized and moderated debate sessions, and hosted intercollegiate competitions.",
                "Collaborated with student organizations to promote club activities, increasing membership and visibility."
            ]
        },
        {
            title: "Technology Chair & Actor | UW Chinese Theater Club",
            location: "Seattle, WA",
            date: "Oct 2022 – Jun 2024",
            description: [
                "Managed technical production, including lighting, sound, photography, and video recording.",
                "Directed a 3-hour play and acted in three plays, contributing to both technical and creative facets of production."
            ]
        },
        {
            title: "Member | UW Game Development Club",
            location: "Seattle, WA",
            date: "Mar 2023 – Jun 2024",
            description: [
                "Participated in weekly meetings to learn and teach game engines like Unity and Godot, and game design concepts.",
                "Organized and hosted the 2023 Indie Game Jam, supporting event logistics and participant engagement."
            ]
        },
        {
            title: "Hearts of Iron IV Chinese Localization | 52PCGame",
            location: "Remote",
            date: "Mar 2020 - Current",
            description: [
                "Performed tasks including decryption of game files, programming of localization systems, and rigorous testing for accuracy and gameplay integrity.",
                "Contributed to the official Chinese localization of Paradox Interactive's grand strategy game, Hearts of Iron IV."
            ]
        }
    ];

    const fontFamily = {
        fontFamily: '"Chakra Petch", sans-serif',
        fontOpticalSizing: 'auto',
        fontWeight: 300,
        fontStyle: 'normal'
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
            
            <div className="app-container">
            <Head />
                <div className="main-content">
                    <Content fontFamily={fontFamily} />
                    <Item experiences={experiences} />
                </div>
                <Footer fontFamily={fontFamily} style={{ position: 'relative' }} />
            </div>
        </div>
    )
}

export default Home;