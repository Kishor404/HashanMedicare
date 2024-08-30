import ProjectImg from "../Assets/IOT4.jpg";

import "../Styles/Project.css";

const Projects=()=>{
    return(
        <>
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
                <div>
                    <div className="Project-Card">
                        <img src={ProjectImg} alt="Project"/>
                        <div>
                            <p>Basic Electronic Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="Project-Cont">
                <p className="Project-Title">| College Level Projects</p>
                <div className="Project-Col">
                    <div className="Project-Row">
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div>
                                <p>Power Electronic</p>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div>
                                <p>Embedded System</p>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div>
                                <p>Wireless Communication</p>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div>
                                <p>Image Processing</p>
                            </div>
                        </div>
                    </div>
                    <div className="Project-Row">
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div>
                                <p>Internet Of Things (IOT)</p>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div>
                                <p>Robotics</p>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div>
                                <p>Web Designing</p>
                            </div>
                        </div>
                        <div className="Project-Card">
                            <img src={ProjectImg} alt="Project"/>
                            <div>
                                <p>Lab View</p>
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