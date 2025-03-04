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
            <section className='Home-Hero'>
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
                        <p className='Home-Hero-Words'>Hashan Medicare is dedicated to innovation and quality in the biomedical and electronics industry. We specialize in developing a diverse range of high-quality biomedical devices, designed to meet the stringent standards of the healthcare sector. Our commitment to excellence drives us to not only offer top-notch products but also to provide customized services and solutions tailored to the unique needs of our clients.</p>
                        <Link to="/About" className='Home-Hero-But'>More Info</Link>
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
                            <p>Hashan Medicare is at the forefront of innovation, specializing in the development of high-quality biomedical devices and cutting-edge Internet of Things (IoT) solutions. Our commitment to excellence is reflected in every product and service we offer.</p>
                            <Link to="#" className='Home-Services-But'>Learn More</Link>
                        </div>
                        
                    </div>
                    <div className='Home-Services-Cont Home-Services-OP'>
                        <div className='Home-Services-R'>
                            <img src={IOT2} alt='IOT'/>
                        </div>
                        <div className='Home-Services-L'>
                            <h1>Projects</h1>
                            <p>Have a project idea? Our team of professionals will work with you to design, build, and deploy custom IoT solutions tailored to your needs. We ensure that your projects are not only innovative but also reliable and scalable.</p>
                            <Link to="#" className='Home-Services-But'>Learn More</Link>
                        </div>
                        
                    </div>
                    <div className='Home-Services-Cont'>
                        <div className='Home-Services-R'>
                            <img src={IOT3} alt='IOT'/>
                        </div>
                        <div className='Home-Services-L'>
                            <h1>Training Course</h1>
                            <p>Our expert-led courses cover everything from the fundamentals of IoT to advanced applications. Designed for all skill levels, our training will equip you with the knowledge and tools needed to excel in the rapidly growing IoT industry.</p>
                            <Link to="/Course" className='Home-Services-But'>Learn More</Link>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section>
                <div className='Home-Products'>
                    <p className='Home-Products-Title'>| Our Products</p>
                    <div className='Home-Products-Cont'>
                        <Link className='Home-Products-Card'>
                            <div className='Home-Product-Img'>
                                <img src={Product1} alt='P1'/>
                            </div>
                            
                            <p className='Home-Products-Name'>Radio Box</p>
                            <p>These card examples offer endless possibilities for displaying content, showcasing products, or presenting information in a visually appealing and organized manner.</p>
                        </Link>
                        <Link className='Home-Products-Card'>
                            <div className='Home-Product-Img'>
                                <img src={Product2} alt='P2'/>
                            </div>
                            <p className='Home-Products-Name'>Communication Box</p>
                            <p>Cards have become an integral part of modern web design, providing a flexible and intuitive way to present information in a structured format.</p>
                        </Link>
                        <Link className='Home-Products-Card'>
                            <div className='Home-Product-Img'>
                                <img src={Product3} alt='P3'/>
                            </div>
                            <p className='Home-Products-Name'>Transmission Box</p>
                            <p>The versatility of these CSS cards allows you to customize them to suit your specific needs. You can easily modify the colors, typography, spacing, and other design elements to align with your brand.</p>
                        </Link>
                        <Link className='Home-Products-Card'>
                            <div className='Home-Product-Img'>
                                <img src={Product4} alt='P4'/>
                            </div>
                            <p className='Home-Products-Name'>Transmission Box</p>
                            <p>The versatility of these CSS cards allows you to customize them to suit your specific needs. You can easily modify the colors, typography, spacing, and other design elements to align with your brand.</p>
                        </Link>
                    </div>
                    <Link className='Home-Products-But' to="/Products">View More</Link>
                </div>
            </section>
        </>
    );
};

export default Home;