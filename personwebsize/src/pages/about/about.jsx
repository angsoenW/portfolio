import React from 'react';
import { Timeline, Card, Typography, Divider } from 'antd';
import Footer from '../../components/footer/footer';

const { Title, Paragraph, Text } = Typography;

const About = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <Typography>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Shuoheng Wang</Title>
                <Paragraph style={{ textAlign: 'center' }}>
                    Seattle, WA | angsoen@uw.edu | 7328758286 | <a href="LinkedIn_URL">LinkedIn</a> | <a href="Github_URL">Github</a>
                </Paragraph>

                <Divider />

                {/* Education Section */}
                <Title level={3}>Education</Title>
                <Timeline mode="left" style={{ marginBottom: '40px' }}>
                    <Timeline.Item label="2020 - 2024">
                        <Text>University of Washington - Seattle</Text>
                        <br />
                        <Text>Bachelor of Science in Informatics</Text>
                        <br />
                        <Text>Focus Area: Software Development & Information Cybersecurity</Text>
                        <br />
                        <Text>Honors: Dean’s List of 2021, 2022, 2023, 2024</Text>
                    </Timeline.Item>
                </Timeline>

                <Divider />

                {/* Technical Skills Section */}
                <Title level={3}>Technical Skills</Title>
                <Card bordered={false} style={{ backgroundColor: '#fafafa', borderRadius: '8px', marginBottom: '40px' }}>
                    <Paragraph>
                        <Text strong>Programming Languages: </Text>Java, JavaScript, C/C++, HTML/CSS, Python, Swift, SQL, R
                    </Paragraph>
                    <Paragraph>
                        <Text strong>Platforms/Environments: </Text>Github, Visual Studio, IntelliJ, MongoDB, Azure, Xcode, Godot, Figma, Miro, Unity
                    </Paragraph>
                    <Paragraph>
                        <Text strong>Professional Skills: </Text>Data Structures and Algorithms, UI/UX Design, Computer Networks, Distributed Applications, Game Design and Development, Software Architecture, Data Analysis, Research Method
                    </Paragraph>
                </Card>

                <Divider />

                {/* Professional Experience Section */}
                <Title level={3}>Professional Experience</Title>
                <Timeline mode="left" style={{ marginBottom: '40px' }}>
                    <Timeline.Item label="May 2024 – Present">
                        <Text>Software Engineer | Tripalink | Seattle, WA</Text>
                        <br />
                        <Paragraph>
                            <ul>
                                <li>Managed the Renty Portal, a key platform facilitating seamless communication between sales teams and customers while organizing and managing rental applications efficiently.</li>
                                <li>Developed new features to enhance user experience, streamline application processing, and optimize interaction between clients and the sales team.</li>
                                <li>Archived and maintained legacy features, ensuring the portal's long-term stability and reliability.</li>
                                <li>Collaborated with cross-functional teams to address business needs, improve system performance, and drive customer satisfaction.</li>
                            </ul>
                        </Paragraph>
                    </Timeline.Item>
                </Timeline>
            </Typography>
            <Footer/>
        </div>
    );
};

export default About;
