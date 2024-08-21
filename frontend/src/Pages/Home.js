import React from 'react';
import HomeBG from '../Assets/HomeBG.png';
import '../Styles/Home.css';
// import Logo from "../Assets/Logo.png";
import IOT1 from "../Assets/IOT1.jpg";
import IOT2 from "../Assets/IOT2.jpg";
import IOT3 from "../Assets/IOT3.jpeg";

import Product1 from "../Assets/Products/Product1.png";
import Product2 from "../Assets/Products/Product2.png";
import Product3 from "../Assets/Products/Product3.png";
import Product4 from "../Assets/Products/Product4.png";



import { Link } from 'react-router-dom';

 

const Home=()=>{
    return(
        <>
            <section>
                <div className='Home-Hero-BG'>
                    <img src={HomeBG} alt='BG'/>
                    <div className='Home-Hero-BG-ColorScale'></div>
                    <div className='Home-Hero-Cont'>
                        <p className='Home-Hero-Welcome'>Welcome To</p>
                        {/* <div className='Home-Hero-LogoCircle'>
                            <img src={Logo} alt='Logo'/>
                        </div> */}
                        <div className='Home-Hero-Title-Cont'>
                            <p className='Home-Hero-Title'>HASHAN <span>MEDICARE</span></p>
                            <p className='Home-Hero-SubTitle'>​Be Deligent. Work Hard. Work Smart.</p>
                        </div>
                        <p className='Home-Hero-Words'>Hashan Medicare developed a wide variety of standard quality rich biomedical devices and to offer customized services and solutions that meet their individual needs and exact specifications of all electronic possessions.Hashan Medicare developed a wide variety of standard quality rich biomedical devices and to offer customized services and solutions that meet their individual needs and exact specifications of all electronic possessions.</p>
                        <Link className='Home-Hero-But'>More Info</Link>
                    </div>
                </div>
                <div className='Home-About'>

                </div>
            </section>
            {/* Services */}
            <section>
                <div className='Home-Services'>
                    <div className='Home-Services-Cont'>
                        <div className='Home-Services-R'>
                            <img src={IOT1} alt='IOT'/>
                        </div>
                        <div className='Home-Services-L'>
                            <h1>Our Services</h1>
                            <p>Hashan Medicare developed a wide variety of standard quality rich biomedical devices and to offer customized services and solutions that meet their individual needs and exact specifications of all electronic possessions.</p>
                            <Link className='Home-Services-But'>Learn More</Link>
                        </div>
                        
                    </div>
                    <div className='Home-Services-Cont'>
                        <div className='Home-Services-R'>
                            <img src={IOT2} alt='IOT'/>
                        </div>
                        <div className='Home-Services-L'>
                            <h1>Projects</h1>
                            <p>Welcome to training and development Zone. We engaged ourselves in the services of evolving new ideas in Students from engineering, arts final year and school projects and we give excellent Implant and internship programs</p>
                            <Link className='Home-Services-But'>Learn More</Link>
                        </div>
                        
                    </div>
                    <div className='Home-Services-Cont'>
                        <div className='Home-Services-R'>
                            <img src={IOT3} alt='IOT'/>
                        </div>
                        <div className='Home-Services-L'>
                            <h1>Training Course</h1>
                            <p>Welcome to training and development Zone. We engaged ourselves in the services of evolving new ideas in Students from engineering, arts final year and school projects and we give excellent Implant and internship programs</p>
                            <Link className='Home-Services-But'>Learn More</Link>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section>
                <div className='Home-Products'>
                    <p className='Home-Products-Title'>| Our Products</p>
                    <div className='Home-Products-Cont'>
                        <Link className='Home-Products-Card'>
                            <img src={Product1} alt='P1'/>
                            <p className='Home-Products-Name'>Radio Box</p>
                            <p>These card examples offer endless possibilities for displaying content, showcasing products, or presenting information in a visually appealing and organized manner.</p>
                        </Link>
                        <Link className='Home-Products-Card'>
                            <img src={Product2} alt='P2'/>
                            <p className='Home-Products-Name'>Communication Box</p>
                            <p>Cards have become an integral part of modern web design, providing a flexible and intuitive way to present information in a structured format.</p>
                        </Link>
                        <Link className='Home-Products-Card'>
                            <img src={Product3} alt='P3'/>
                            <p className='Home-Products-Name'>Transmission Box</p>
                            <p>The versatility of these CSS cards allows you to customize them to suit your specific needs. You can easily modify the colors, typography, spacing, and other design elements to align with your brand.</p>
                        </Link>
                        <Link className='Home-Products-Card'>
                            <img src={Product4} alt='P4'/>
                            <p className='Home-Products-Name'>Transmission Box</p>
                            <p>The versatility of these CSS cards allows you to customize them to suit your specific needs. You can easily modify the colors, typography, spacing, and other design elements to align with your brand.</p>
                        </Link>
                    </div>
                    <Link className='Home-Products-But'>View More</Link>
                </div>
            </section>
        </>
    );
};

export default Home;