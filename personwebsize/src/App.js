import React,{useState} from 'react';
import Head from './components/head/head';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Item from './components/item/item' 

const App = () => {
        // eslint-disable-next-line
        const [experiences,setSxperiences] = useState([
            {
              title: "Volunteer | UW Gamer Group, Video Game History Foundation",
              location: "Seattle, WA",
              date: "Feb 2023 – Jun 2023",
              description: [
                "Volunteered in researching on the availability and preservation of video games across archived platforms, including Game Boy, PS1, and Nintendo 64.",
                "Analyzed game design strategies and metadata classification to assess the evolution of game architectures over time.",
                "Collaborated with a multidisciplinary team to document and preserve classic games, contributing to the creation of a comprehensive digital archive.",
                "Developed actionable insights into how advancements in computational power have influenced game design, which were presented to the Video Game History Foundation."
              ],
              links: [] // 可以在此添加链接
            },
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
              links: [] // 可以在此添加链接
            },
            {
              title: "Unreal Fest VIP College Experience & iSchool Game Jam | UW Representative",
              location: "",
              date: "Oct 2024",
              description: [
                "Selected to represent UW at the Unreal Fest, attending exclusive sessions with Epic Games professionals and exploring cutting-edge trends in game development.",
                "Participated in workshops and presentations on Unreal Engine, networking with industry leaders to explore game development trends and next-gen platforms.",
                "Designed and developed a creative, giant-bedroom-themed level in Rocket Racing using Unreal Editor for Fortnite during the iSchool Game Jam.",
                "Awarded 'Most-Liked Track' by all participants, highlighting innovative mechanics and unique storytelling within the game.",
                "Demonstrated advanced problem-solving skills and collaboration in a fast-paced environment, ensuring immersive gameplay and technical polish."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "Seattle Indies Expo (SIX) | Bad Zombie Games Representative",
              location: "Sep 2024",
              description: [
                "Engaged with attendees by providing in-depth demonstrations, answering technical and gameplay-related questions, and gathering valuable feedback to inform future development.",
                "Collaborated with the development team to present the game’s unique features and design philosophy, highlighting innovative mechanics and storytelling.",
                "Networked with developers and industry experts, discussing potential collaborations and gaining insights into current trends in game development.",
                "Demonstrated strong communication skills by clearly explaining complex game mechanics and promoting the game to a broader audience."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "Bearly There | Godot Engine",
              date: "2024",
              description: [
                "Developed a fully playable demo level using the Godot engine, focusing on advanced level design, character mechanics, and environmental storytelling to highlight grizzly bear habitat loss.",
                "Designed and refined game prototypes, conducted extensive playtesting to gather user feedback and enhance game engagement and usability.",
                "Produced comprehensive documentation, including design documents and a demo video, used to present the game's potential to peers and instructors."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "SpeakPerfect | iOS App",
              date: "2024",
              description: [
                "Designed and implemented an iOS app aimed at improving English pronunciation for non-native speakers through daily conversation simulations using Speechace and chatbot APIs.",
                "Integrated real-time feedback features, increasing user engagement and learning outcomes."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "What You Got Left | Capstone Project",
              date: "2024",
              description: [
                "Led the full-stack development of a capstone project designed to reduce food waste among college students, implementing distributed systems for ingredient tracking, recipe generation, and expiration date reminders.",
                "Engineered robust API integrations for seamless front-end and back-end functionality, including user authentication and data storage.",
                "Played a key role in user research and testing, which informed the successful development of features that directly addressed the problem of food waste."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "Info314-TicTacToeRFC | Java",
              date: "2023",
              description: [
                "Developed a command-line interface-based multiplayer Tic-Tac-Toe game adhering to specific RFC protocols.",
                "Enhanced the game’s functionality by integrating network programming concepts and ensuring robust communication between players."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "Architecture Analysis on Material UI | Project Report",
              date: "2023",
              description: [
                "Conducted an in-depth analysis of Material UI's architecture, focusing on development practices, application scenarios, and design patterns.",
                "Identified performance enhancement opportunities, proposing targeted improvements that led to actionable recommendations for system optimization."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "SubMax: Final Design Document | Mobile Application Design",
              date: "2023",
              description: [
                "Spearheaded the design and prototyping of SubMax, a mobile application aimed at optimizing subscription management for college students.",
                "Developed a comprehensive user interface using Figma, and streamlined the app's features to enhance user experience and cost management with a focus on data informativity and user interactivity.",
                "Identified user needs through research, ideating potential solutions, and outlining a clear development roadmap."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "iUW: Systems Analysis and Design Document | Product Development & Management Document",
              date: "2023",
              description: [
                "Created a vision and scope document for an alumni information system, integrating enterprise architecture to improve alumni-student engagement.",
                "Led the design and implementation of the system's features, focusing on data management, user experience and stakeholder relationships."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "The Utopia",
              date: "2020",
              description: [
                "Developed an educational game in Python, targeting the issue of school violence by promoting interactive learning and decision-making.",
                "Applied a foundational game engine provided by the course to construct immersive scenarios.",
                "Designed and implemented MDA framework that engages players in scenarios reflecting real-life situations, fostering empathy and understanding of the consequences of violence."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "Transportation in Covid Times",
              date: "2021",
              description: [
                "A website development on transportation usage during COVID in the U.S. and generated graphics using R Studio."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "President | UW Chinese Debate Club",
              location: "Seattle, WA",
              date: "Jun 2022 – Jun 2023",
              description: [
                "Led weekly meetings, organized and moderated debate sessions, and hosted intercollegiate competitions.",
                "Collaborated with student organizations to promote club activities, increasing membership and visibility."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "Technology Chair & Actor | UW Chinese Theater Club",
              location: "Seattle, WA",
              date: "Oct 2022 – Jun 2024",
              description: [
                "Managed technical production, including lighting, sound, photography, and video recording.",
                "Directed a 3-hour play and acted in three 3-hour plays, contributing to both technical and creative production facets."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "Member | UW Game Development Club",
              location: "Seattle, WA",
              date: "Mar 2023 – Jun 2024",
              description: [
                "Participated in weekly meetings, learning and teaching game engines (Unity, Godot) and game design concepts.",
                "Organized and hosted the 2023 Indie Game Jam, supporting event logistics and participant engagement."
              ],
              links: [] // 可以在此添加链接
            },
            {
              title: "Hearts of Iron IV Chinese Localization | 52PCGame",
              location: "Remote",
              date: "Mar 2020 - Current",
              description: [
                "Performed comprehensive tasks including decryption of game files, programming of localization systems, repacking of translated content, and rigorous testing to ensure language accuracy and gameplay integrity.",
                "Contributed to the official Chinese localization of Paradox Interactive's grand strategy game, Hearts of Iron IV.",
                "Gained insights into game localization complexities, including cultural adaptation and technical implementation in a large-scale strategy game."
              ],
              links: [] // 可以在此添加链接
            }
          ])
    const fontFamily = {
        fontFamily: '"Chakra Petch", sans-serif',  
        fontOpticalSizing: 'auto',
        fontWeight: 300,
        fontStyle: 'normal'
    }
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Head />
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}> {/* 让这个 div 占据剩余空间 */}
                <Content fontFamily={fontFamily} />
                <Item experiences={experiences} />
            </div>
            <Footer fontFamily={fontFamily} />
        </div>
    );
}

export default App;