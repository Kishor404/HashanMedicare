import ContactLogo from "../Assets/Logo.png";

import React from 'react';
import MyMap from "../Components/MyMap";

import "../Styles/Contact.css"


const Contact=()=>{
    return(
        <>
            <section className="Contact-Body">
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
            </section>
        </>
    )
}

export default Contact;