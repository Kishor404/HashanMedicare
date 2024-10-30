import Project1 from "../Assets/Projects/Project1.jpg";
import Project2 from "../Assets/Projects/Project2.jpg";
import Project3 from "../Assets/Projects/Project3.jpg";
import Project4 from "../Assets/Projects/Project4.jpg";
import Project5 from "../Assets/Projects/Project5.jpg";
import Project6 from "../Assets/Projects/Project6.jpg";
import Project7 from "../Assets/Projects/Project7.jpeg";
import Project8 from "../Assets/Projects/Project8.jpg";
import Project9 from "../Assets/Projects/Project9.jpeg";
import ProjectImg from "../Assets/IOT2.jpg";

import "../Styles/Projects.css";

const Projects = () => {
    return (
        <>
            <section className="Project-Filler">
                {/* FILLER */}
            </section>

            {/* Projects Header */}
            <section>
                <div className="About-TopHeader TopHeader">
                    <img src={ProjectImg} alt="About" />
                    <div>
                        <p>| Projects</p>
                    </div>
                </div>
            </section>

            {/* School Level Projects */}
            <section>
                <div className="Project-Cont">
                    <p className="Project-Title">| School Level Projects</p>
                    <div className="Project-Card-Cont">
                        <div className="Project-Card">
                            <img src={Project1} alt="Project" />
                            <div className="Project-Det">
                                <h6>Basic Electronic Projects</h6>
                                <div>
                                    <p>These projects introduce fundamental electronic concepts like circuits, resistors, capacitors, and more. Students gain hands-on experience by building simple electronic devices, helping them understand the basics of how electronics work.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project2} alt="Project" />
                            <div className="Project-Det">
                                <h6>Internet Of Things (IOT)</h6>
                                <div>
                                    <p>This project explores how devices are connected over the internet. Students learn to create simple IoT systems, integrating sensors and actuators that can communicate over networks, providing a foundation for future smart applications.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project3} alt="Project" />
                            <div className="Project-Det">
                                <h6>Lab View</h6>
                                <div>
                                    <p>LabView introduces students to system-design programming environments. They learn to create virtual instruments (VIs) to simulate and control physical systems, offering a visual approach to engineering and test applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* College Level Projects */}
            <section className="Project-Page">
                <div className="Project-Cont">
                    <p className="Project-Title">| College Level Projects</p>
                    <div className="Project-Card-Cont">

                        <div className="Project-Card">
                            <img src={Project4} alt="Project" />
                            <div className="Project-Det">
                                <h6>Power Electronics</h6>
                                <div>
                                    <p>This project delves into the conversion and control of electrical power using semiconductors. Students learn about power converters, inverters, and applications in renewable energy systems and electric vehicles.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project5} alt="Project" />
                            <div className="Project-Det">
                                <h6>Embedded Systems</h6>
                                <div>
                                    <p>Students design systems where software meets hardware. They work with microcontrollers, sensors, and real-time operating systems, creating applications such as home automation and automotive control systems.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project6} alt="Project" />
                            <div className="Project-Det">
                                <h6>Wireless Communication</h6>
                                <div>
                                    <p>Students explore the fundamentals of wireless communication, learning about protocols, modulation techniques, and their applications in mobile networks, Wi-Fi, and Bluetooth technologies.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project7} alt="Project" />
                            <div className="Project-Det">
                                <h6>Image Processing</h6>
                                <div>
                                    <p>This project focuses on techniques for processing and analyzing digital images. Students use programming languages like Python or MATLAB to apply filters, detect features, and recognize objects in images.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project2} alt="Project" />
                            <div className="Project-Det">
                                <h6>Internet Of Things (IOT)</h6>
                                <div>
                                    <p>This project covers advanced IoT applications, connecting devices in a network that exchange data. Students design and implement IoT solutions for areas like smart cities, healthcare monitoring, and industrial automation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project8} alt="Project" />
                            <div className="Project-Det">
                                <h6>Robotics</h6>
                                <div>
                                    <p>This project involves designing and building robots. Students work on mechanics, electronics, and programming to create autonomous or semi-autonomous systems capable of performing tasks like navigation and object manipulation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project9} alt="Project" />
                            <div className="Project-Det">
                                <h6>Web Designing</h6>
                                <div>
                                    <p>This project teaches the fundamentals of web development, covering both front-end (HTML, CSS, JavaScript) and back-end technologies (Databases, Server-side programming) to build dynamic and responsive websites.</p>
                                </div>
                            </div>
                        </div>

                        <div className="Project-Card">
                            <img src={Project3} alt="Project" />
                            <div className="Project-Det">
                                <h6>Lab View</h6>
                                <div>
                                    <p>Advanced applications of LabView in engineering simulations and control systems, allowing students to build complex virtual instruments for testing and automation purposes.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;
