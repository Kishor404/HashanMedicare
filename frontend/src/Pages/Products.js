import ProductsImg from "../Assets/IOT4.jpg";

import '../Styles/Product.css';

import Product1 from "../Assets/Products/Product1.png"
import Product2 from "../Assets/Products/Product2.png"
import Product3 from "../Assets/Products/Product3.png"
import Product4 from "../Assets/Products/Product4.png"
import Product5 from "../Assets/Products/Product5.png"
import Product6 from "../Assets/Products/Product6.png"
import Product7 from "../Assets/Products/Product7.png"
import { Link } from 'react-router-dom';

const Products=()=>{
    return(
        <>
            <section style={{marginTop:'10vh'}}>
                <div className="About-TopHeader TopHeader">
                    <img src={ProductsImg} alt="About"/>
                    <div>
                        <p>| Our Products</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className="Product-Col">
                        <div className="Product-Row">
                            <Link className="Product-Card">
                                <img src={Product1} alt="Product1"/>
                                <p className="Product-Title">Wet Field Bi-Polar Cautary (Digital)</p>
                                <div className="Product-Info">
                                    <p>Hashan Medicare manufactures cautary, which is a wet field digital bipolar coagulator. It is a low power Electro surgical Unit and is used to arrest bleeding from the blood vessels during ophthalmic surgery. This is specially designed to ensure smooth coagulation, micro-controller digital development, controlled performance and easy to operate button system for increment/ decrement.</p>
                                    <p style={{fontSize:"14pt"}}>Click To More Info !</p>
                                </div>
                            </Link>
                            <Link className="Product-Card">
                                <img src={Product2} alt="Product1"/>
                                <p className="Product-Title">Wet Field Bi-Polar Cautary (Analog)</p>
                                <div className="Product-Info">
                                    <p>Hashan medicare manufactures cautery, which is a wet field Analog bipolar coagulator. It is a low power Electro Surgical Unit and is used to arrest bleeding from the blood vessels during ophthalmic surgery. This is specially designed to ensure smooth coagulation,  controlled performance and easy to operate potentiometer knob.</p>
                                    <p style={{fontSize:"14pt"}}>Click To More Info !</p>
                                </div>
                            </Link>
                            <Link className="Product-Card">
                                <img src={Product3} alt="Product1"/>
                                <p className="Product-Title">Anterior Vitrectomy</p>
                                <div className="Product-Info">
                                    <p></p>
                                    <p style={{fontSize:"14pt"}}>Click To More Info !</p>
                                </div>
                            </Link>
                            <Link className="Product-Card">
                                <img src={Product4} alt="Product1"/>
                                <p className="Product-Title">Endo Illuminator White LED Light Source</p>
                                <div className="Product-Info">
                                    <p>The LED light fiber design (0.5 mm) stabilizes the 23-25gauge tip in the eye and provides up to 20-25 lumen of measured illumination. Easy insertion and removal without suture placement make it convenient to change the position of the device during surgery and efficiently shorten surgical time. This suture-free 23-25gauge endo illumination efficiency of vitreous surgery. For most surgical sub specialties, the key to illumination is brightness the brighter the better.</p>
                                    <p style={{fontSize:"14pt"}}>Click To More Info !</p>
                                </div>
                            </Link>
                            
                            <Link className="Product-Card">
                                <img src={Product5} alt="Product1" style={{width:"60%"}}/>
                                <p className="Product-Title">Chair Unit</p>
                                <div className="Product-Info">
                                    <p></p>
                                    <p style={{fontSize:"14pt"}}>Click To More Info !</p>
                                </div>
                            </Link>
                            <Link className="Product-Card">
                                <img src={Product6} alt="Product1"/>
                                <p className="Product-Title">Vision Chart</p>
                                <div className="Product-Info">
                                    <p></p>
                                    <p style={{fontSize:"14pt"}}>Click To More Info !</p>
                                </div>
                            </Link>
                            <Link className="Product-Card">
                                <img src={Product7} alt="Product1" style={{width:"60%"}}/>
                                <p className="Product-Title">Motorised Table Unit</p>
                                <div className="Product-Info">
                                    <p></p>
                                    <p style={{fontSize:"14pt"}}>Click To More Info !</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Products;