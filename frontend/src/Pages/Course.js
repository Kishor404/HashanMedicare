import CourseImg from "../Assets/IOT4.jpg";

import "../Styles/Course.css";

const Course=()=>{
    return(
        <>
        <section>
            <div className="About-TopHeader TopHeader">
                <img src={CourseImg} alt="About"/>
                <div>
                    <p>| Training Courses</p>
                </div>
            </div>
        </section>
        <section>
            <div className="Course-Cont">
                <p className="Course-Title">| Course Domains</p>
                <div className="Course-Col">
                    <div className="Course-Row">
                        <div className="Course-Card">
                            <img src={CourseImg} alt="Course"/>
                            <div>
                                <p>Power Electronic</p>
                            </div>
                        </div>
                        <div className="Course-Card">
                            <img src={CourseImg} alt="Course"/>
                            <div>
                                <p>Embedded System</p>
                            </div>
                        </div>
                        <div className="Course-Card">
                            <img src={CourseImg} alt="Course"/>
                            <div>
                                <p>Wireless Communication</p>
                            </div>
                        </div>
                        <div className="Course-Card">
                            <img src={CourseImg} alt="Course"/>
                            <div>
                                <p>Image Processing</p>
                            </div>
                        </div>
                    </div>
                    <div className="Course-Row">
                        <div className="Course-Card">
                            <img src={CourseImg} alt="Course"/>
                            <div>
                                <p>Internet Of Things (IOT)</p>
                            </div>
                        </div>
                        <div className="Course-Card">
                            <img src={CourseImg} alt="Course"/>
                            <div>
                                <p>Robotics</p>
                            </div>
                        </div>
                        <div className="Course-Card">
                            <img src={CourseImg} alt="Course"/>
                            <div>
                                <p>Web Designing</p>
                            </div>
                        </div>
                        <div className="Course-Card">
                            <img src={CourseImg} alt="Course"/>
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

export default Course;