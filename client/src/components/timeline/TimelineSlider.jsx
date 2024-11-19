import React, { useState } from 'react';
import { Slider } from 'antd';
import './TimelineSlider.css';

const timelineData = [
    {
        year: "2002",
        events: [
            "Spawned into the world in a game called 'Life' and haven’t hit the pause button since."
        ]
    },
    {
        year: "2016",
        events: [
            "What was I doing in 2016? Oh, just grinding Overwatch and battling puberty like it was a boss fight.",
            "Game of the year: Overwatch."
        ]
    },
    {
        year: "2017",
        events: [
            "Entered Paul VI High School in Haddonfield, New Jersey.",
            "Claimed the championship in the school’s bowling competition (yes, I can roll strikes IRL too).",
            "Game of the year: GTA V—still iconic."
        ]
    },
    {
        year: "2019",
        events: [
            "Juggling college applications, SATs, and the existential dread of 'what’s next?'.",
            "Said hello to COVID-19 and learned the fine art of surviving online.",
            "Game of the year: Rainbow Six: Siege."
        ]
    },
    {
        year: "2020",
        events: [
            "Graduated from Paul VI High School and leveled up to the University of Washington.",
            "Battled COVID, the ultimate mini-boss of reality.",
            "Game of the year: Minecraft 1.7.10—sometimes nostalgia hits differently."
        ]
    },
    {
        year: "2021",
        events: [
            "Started studying Informatics at the University of Washington, diving into SWE and cybersecurity.",
            "Learned to speak Java, C++, Python, and JavaScript—code is my second language now.",
            "Game of the year: The Last of Us—Part 2 is disappointing though."
        ]
    },
    {
        year: "2022",
        events: [
            "Landed my first job at UW Housing & Food Services—responsibility unlocked!",
            "Stole the show as an actor and director in the UW Chinese Theater Club.",
            "Started tinkering with a VR game prototype because why not dream big?",
            "Game of the year: Cities: Skylines—designing dream cities, demolishing traffic nightmares."
        ]
    },
    {
        year: "2023",
        events: [
            "Conducted AI research on higher education, proving that robots might save (or ruin) the future.",
            "Contributed to the UW Game Research Group to preserve old games.",
            "Directed a 2-hour play: '非不顾身的爱情' (Love Without Regret).",
            "Game of the year: Stellaris—exploring the cosmos, one cheat at a time."
        ]
    },
    {
        year: "2024",
        events: [
            "Graduated from the University of Washington with a degree in Informatics—mission accomplished.",
            "Represented UW at Unreal Fest and snagged 'Most-Liked Track' for Rocket Racing in the Game Jam.",
            "Developed 'Bearly There', a game about environmental protection, because saving the planet can be fun.",
            "Starred in '无人生还' (And Then There Were None) as William Henry Blore and '钦差大臣' (The Government Inspector) as multiple characters.",
            "Game of the year: Cyberpunk 2077—spent 3 hours in character creation alone."
        ]
    },
    {
        year: "Current",
        events: [
            "Working as a Software Engineer at Tripalink Seattle, juggling tech and creativity daily.",
            "Crafting my personal website and portfolio—forever tweaking, never satisfied.",
            "Applying for graduate programs and chasing the dream.",
            "Still contributing to Hearts of Iron IV Chinese Localization—bringing immersive gaming to a wider audience.",
            "Game of the year: Black Myth: Wukong—embracing mythical action at its peak."
        ]
    }
];


const TimelineSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(timelineData.length - 1);

    // Create marks for the slider using indices
    const marks = {};
    timelineData.forEach((item, index) => {
        marks[index] = item.year;
    });

    const handleSliderChange = (value) => {
        setCurrentIndex(value);
    };

    const currentItem = timelineData[currentIndex];

    return (
        <div className="timeline-slider-container">
            <h2 className="timeline-title">My Journey</h2>
            <Slider
                min={0}
                max={timelineData.length - 1}
                marks={marks}
                value={currentIndex}
                onChange={handleSliderChange}
                step={1}
                tooltip={{ open: false }}
            />
            <div className="timeline-event">
                <h3>{currentItem.year}</h3>
                <ul className="event-list">
                    {currentItem.events.map((event, idx) => (
                        <li key={idx} className="event-item">
                            {event}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimelineSlider;