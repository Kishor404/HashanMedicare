import "./Components.css"
import IOT4 from "../Assets/IOT4.jpg"
import logo from "../Assets/Logo.png"

const Footer=()=>{
    return(
        <>
        <div className="Foot-Contact">
            <img src={IOT4} alt="BG"/>
            <div className="Foot-Data">
                <div className="Foot-Cont">
                    <p className="Foot-Cont-Title">HASHAN <span>MEDICARE</span></p>
                    <div className="Foot-Cont-Addr">
                        <p>271 N-1, Sankarankovil Road,</p>
                        <p>Rajapalayam</p>
                        <p>hashanmedicare@gmail.com</p>
                        <p>99424 31062  |  79046 85847</p>
                    </div>
                    <button className="Foot-But">Click Here To Get Hired</button>
                </div>
            </div>
            
        </div>
        <div className="Foot">
            <p>&copy; 2024 Hashan Medicare - All Rights Reserved.</p>
        </div>
        </>
    );
};

export default Footer;