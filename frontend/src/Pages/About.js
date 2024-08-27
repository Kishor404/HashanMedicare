import AboutImg from "../Assets/IOT4.jpg";
import Team1 from "../Assets/Team/Team1.png";
import Team2 from "../Assets/Team/Team2.png";
import Team3 from "../Assets/Team/Team3.png";
import Team4 from "../Assets/Team/Team4.png";
import "../Styles/Overall.css";
import "../Styles/About.css";


const About=()=>{
    return(
        <>
            <section>
                <div className="About-TopHeader TopHeader">
                    <img src={AboutImg} alt="About"/>
                    <div>
                        <p>| About Us</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="About-Para-Cont">
                    <p className="About-Para-Cont-h">| Overview</p>
                    <p className="About-Para-Cont-p">Hashan Medicare developed a wide variety of standard quality rich biomedical devices and to offer customized services and solutions that meet their individual needs and exact specifications of all electronic possessions.Hashan Medicare developed a wide variety of standard quality rich biomedical devices and to offer customized services and solutions that meet their individual needs and exact specifications of all electronic possessions.</p>
                </div>
            </section>
            <section className="About-Team">
                <div className="About-Team-TopTitle">
                    <p>| Meet Our Team</p>
                </div>
                <div className="About-Team-container">
                    <div className="About-Team-row">
                        <div className="About-Team-Block">
                            <div className="About-Team-our-team">
                                <div className="About-Team-Img-Cont">
                                    <img src={Team1} alt="Team" className="About-Team-Img"/>
                                </div>
                                
                                <div className="About-Team-team-content">
                                    <h3 className="About-Team-title">Pothirasan</h3>
                                    <span className="About-Team-post">Director</span>
                                    {/* <ul className="About-Team-social">
                                        <li><a href="#"><i className="About-Team-fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="About-Team-fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="About-Team-fab fa-google-plus-g"></i></a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="About-Team-Block">
                            <div className="About-Team-our-team">
                                <div className="About-Team-Img-Cont">
                                    <img src={Team2} alt="Team" className="About-Team-Img"/>
                                </div>
                                <div className="About-Team-team-content">
                                    <h3 className="About-Team-title">Ramachandran</h3>
                                    <span className="About-Team-post">Director</span>
                                    {/* <ul className="About-Team-social">
                                        <li><a href="#"><i className="About-Team-fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="About-Team-fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="About-Team-fab fa-google-plus-g"></i></a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="About-Team-Block">
                            <div className="About-Team-our-team">
                                <div className="About-Team-Img-Cont">
                                    <img src={Team3} alt="Team" className="About-Team-Img"/>
                                </div>
                                
                                <div className="About-Team-team-content">
                                    <h3 className="About-Team-title">Ragunagam</h3>
                                    <span className="About-Team-post">MARKETING MANAGER</span>
                                    {/* <ul className="About-Team-social">
                                        <li><a href="#"><i className="About-Team-fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="About-Team-fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="About-Team-fab fa-google-plus-g"></i></a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="About-Team-Block">
                            <div className="About-Team-our-team">
                                <div className="About-Team-Img-Cont">
                                    <img src={Team4} alt="Team" className="About-Team-Img"/>
                                </div>
                                <div className="About-Team-team-content">
                                    <h3 className="About-Team-title">Sriram Kumar</h3>
                                    <span className="About-Team-post">Developer</span>
                                    {/* <ul className="About-Team-social">
                                        <li><a href="#"><i className="About-Team-fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="About-Team-fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="About-Team-fab fa-google-plus-g"></i></a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
export default About