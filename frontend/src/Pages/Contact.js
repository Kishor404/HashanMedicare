import ContactImg from "../Assets/IOT4.jpg";

import React from 'react';

import "../Styles/Contact.css"


const Contact=()=>{
    return(
        <>  
            <section style={{marginTop:'10vh'}}>
                <div className="About-TopHeader TopHeader">
                    <img src={ContactImg} alt="About"/>
                    <div>
                        <p>| Contact</p>
                    </div>
                </div>
            </section>
            {/* <section className="Contact-Body">
                <div className="Contact-Cont">
                    <div className="Contact-L">
                        <MyMap/>
                    </div>
                    <div className="Contact-R">
                        <div className="Contact-Logo"><img src={ContactLogo} alt="Logo"/></div>
                        <div className="Contact-Add">
                            <p>271 N-1, Sankarankovil Road,</p>
                            <p>Rajapalayam</p>
                            <p>hashanmedicare@gmail.com</p>
                            <p>99424 31062  |  79046 85847</p>
                        </div>
                        <button>Get Hired</button>
                    </div>
                </div>
            </section> */}
            <section>
                <div className="Contact-Cont">
                    <div className="Contact-Card">
                        <div className="Contact-L">
                            <div className="Contact-Map">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.083412993694!2d78.65800901461085!3d8.88843359150657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040acb00000001%3A0x4976ae4c9f048c3e!2sSivaganga%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1658318270436!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    width="100%"
                                    height="100%"
                                ></iframe>
                            </div>
                        </div>
                        <div className="Contact-R">
                            <p className="Contact-T">HASHAN <span>MEDICARE</span></p>
                            <div>
                                <p>271 N-1, Sankarankovil Road,</p>
                                <p>Rajapalayam</p>
                                <p>hashanmedicare@gmail.com</p>
                                <p>99424 31062  |  79046 85847</p>
                            </div>
                            <button>Get Hired</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;