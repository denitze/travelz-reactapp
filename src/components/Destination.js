import {FaChevronRight } from 'react-icons/fa';

const Destination = () => {
    return ( 
        <section className="destination">
            <div className="destinationFlex">
    <h2>Featured Destinations</h2>
    <a href="/">View All <span><FaChevronRight/></span> </a>
            </div>
        <div className="destinationIMGs">
        <div className="img-div">
                <img src="assets/img/Indonesia.png" alt=""/>
                <div className="country">
                <h4>Raja Ampat</h4>
                <p>Indonesia</p>
            </div> 
            </div>
                <div className="img-div">
                    <img src="assets/img/China.png" alt="" />
                    <div className="country">
                        <h4>Fanjingshan</h4>
                        <p>China</p>
                    </div>
                </div>           

            <div className="img-div">
                <img src="assets/img/Switzerland.png" alt=""/>
                <div className="country">
                <h4>Vevey</h4>
                <p>Switzerland</p>
            </div>
            </div>
                        
            <div className="img-div">
                <img src="assets/img/Montenegro.png" alt=""/>
                <div className="country">
                <h4>Skadar</h4>
                <p>Montenegro</p>
            </div>
            </div>
        </div>
        </section>
     );
}
 
export default Destination;