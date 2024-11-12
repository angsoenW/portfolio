import React from 'react';
import { Timeline, Card, Typography, Divider } from 'antd';
import Footer from '../../components/footer/footer';
import './index.css';

const { Title, Paragraph, Text } = Typography;

const About = () => {
    const fontFamily = {
        fontFamily: '"Chakra Petch", sans-serif',
        fontOpticalSizing: 'auto',
        fontWeight: 300,
        position: 'relative',
        fontStyle: 'normal'
    };

    return (
        <>
            <div className="outer-box" style={{color:'#A36E2B'}}>
                <div>
                    <div className="main-content"> {/* 主要内容区域 */}
                        <Typography>
                            <Title level={2} style={{...fontFamily, textAlign: 'center', marginBottom: '20px'}}>Shuoheng
                                Wang</Title>
                            <Paragraph style={{...fontFamily, textAlign: 'center'}}>
                                Seattle, WA | <a href="mailto:angsoen@uw.edu">angsoen@uw.edu</a> | 7328758286 | <a
                                href="LinkedIn_URL">LinkedIn</a> | <a href="Github_URL">Github</a>
                            </Paragraph>

                            <Divider/>

                            {/* Education Section */}
                            <Title level={3} style={fontFamily}>Education</Title>
                            <Timeline mode="left" style={{marginBottom: '40px'}}>
                                <Timeline.Item label="2020 - 2024" style={fontFamily}>
                                    <Text style={fontFamily}>University of Washington - Seattle</Text>
                                    <br/>
                                    <Text style={fontFamily}>Bachelor of Science in Informatics</Text>
                                    <br/>
                                    <Text style={fontFamily}>Focus Area: Software Development & Information
                                        Cybersecurity</Text>
                                    <br/>
                                    <Text style={fontFamily}>Honors: Dean’s List of 2021, 2022, 2023, 2024</Text>
                                </Timeline.Item>
                            </Timeline>

                            <Divider/>

                            {/* Technical Skills Section */}
                            <Title level={3} style={fontFamily}>Technical Skills</Title>
                            <Card bordered={false} style={{...fontFamily, borderRadius: '8px', marginBottom: '40px'}}>
                                <Paragraph style={fontFamily}>
                                    <Text strong style={fontFamily}>Programming Languages: </Text>Java, JavaScript,
                                    C/C++,
                                    HTML/CSS, Python, Swift, SQL, R
                                </Paragraph>
                                <Paragraph style={fontFamily}>
                                    <Text strong style={fontFamily}>Platforms/Environments: </Text>Github, Visual
                                    Studio,
                                    IntelliJ, MongoDB, Azure, Xcode, Godot, Figma, Miro, Unity
                                </Paragraph>
                                <Paragraph style={fontFamily}>
                                    <Text strong style={fontFamily}>Professional Skills: </Text>Data Structures and
                                    Algorithms, UI/UX Design, Computer Networks, Distributed Applications, Game Design
                                    and
                                    Development, Software Architecture, Data Analysis, Research Method
                                </Paragraph>
                            </Card>

                            <Divider/>

                            {/* Professional Experience Section */}
                            <Title level={3} style={fontFamily}>Professional Experience</Title>
                            <Timeline mode="left" style={{marginBottom: '40px'}}>
                                <Timeline.Item style={fontFamily} label="May 2024 – Present">
                                    <Text style={fontFamily}>Software Engineer | Tripalink | Seattle, WA</Text>
                                    <br/>
                                    <Paragraph>
                                        <ul>
                                            <li style={fontFamily}>Managed the Renty Portal, a key platform facilitating
                                                seamless communication between sales teams and customers while
                                                organizing
                                                and managing rental applications efficiently.
                                            </li>
                                            <li style={fontFamily}>Developed new features to enhance user experience,
                                                streamline application processing, and optimize interaction between
                                                clients
                                                and the sales team.
                                            </li>
                                            <li style={fontFamily}>Archived and maintained legacy features, ensuring the
                                                portal's long-term stability and reliability.
                                            </li>
                                            <li style={fontFamily}>Collaborated with cross-functional teams to address
                                                business needs, improve system performance, and drive customer
                                                satisfaction.
                                            </li>
                                        </ul>
                                    </Paragraph>
                                </Timeline.Item>
                            </Timeline>
                        </Typography>
                    </div>
                </div>

            </div>
            <Footer fontFamily={fontFamily} className="footer"/> {/* 页脚 */}
        </>
    );
};

export default About;
