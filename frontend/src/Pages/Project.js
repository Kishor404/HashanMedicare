import ProjectImg1 from "../Assets/IOT4.jpg";
import ProjectImg from "../Assets/IOT2.jpg";


import "../Styles/Projects.css";

const Projects=()=>{
    return(
        <>
        <section className="Project-Filler">
            {/* FILLER */}
        </section>
        <section>
            <div className="About-TopHeader TopHeader">
                <img src={ProjectImg} alt="About"/>
                <div>
                    <p>| Projects</p>
                </div>
            </div>
        </section>
        <section>
            <div className="Project-Cont">
                <p className="Project-Title">| School Level Projects</p>
                <div className="Project-Card-Cont">
                    <div className="Project-Card">
                        <img src={ProjectImg1} alt="Project"/>
                        <div className="Project-Det">
                            <h6>Basic Electronic Projects</h6>
                            <div>
                                <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Internet Of Things (IOT)</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                    <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Lab View</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <section className="Project-Page">
            <div className="Project-Cont">
                <p className="Project-Title">| College Level Projects</p>
                <div>
                    <div className="Project-Card-Cont">
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Power Electronic</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Embedded System</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Wireless Communication</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Image Processing</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Internet Of Things (IOT)</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Robotics</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Web Designing</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div className="Project-Det">
                                <h6>Lab View</h6>
                                <div>
                                    <p>Tempor aute in eu ea nostrud laboris deserunt sint sint incididunt ad ad eu cupidatat. Lorem ut magna enim aliqua anim tempor laborum cillum nostrud reprehenderit aute nisi sit.</p>
                                </div>
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