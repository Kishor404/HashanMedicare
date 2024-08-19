import React from 'react';
import HomeBG from '../Assets/HomeBG.png';
import '../Styles/Home.css';
import Logo from "../Assets/Logo.png";
import { Link } from 'react-router-dom';

 

const Home=()=>{
    return(
        <>
            <div>
                <div className='Home-Hero-BG'>
                    <img src={HomeBG} alt='BG'/>
                    <div className='Home-Hero-BG-ColorScale'></div>
                    <div className='Home-Hero-Cont'>
                        <p className='Home-Hero-Welcome'>Welcome To</p>
                        <div className='Home-Hero-LogoCircle'>
                            <img src={Logo} alt='Logo'/>
                        </div>
                        <p className='Home-Hero-Words'>Hashan Medicare developed a wide variety of standard quality rich biomedical devices and to offer customized services and solutions that meet their individual needs and exact specifications of all electronic possessions.Hashan Medicare developed a wide variety of standard quality rich biomedical devices and to offer customized services and solutions that meet their individual needs and exact specifications of all electronic possessions.</p>
                        <Link className='Home-Hero-But'>More Info</Link>
                    </div>
                </div>
                <div className='Home-About'>

                </div>
            </div>
        </>
    );
};

export default Home;