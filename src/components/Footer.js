import { FaTwitter } from 'react-icons/fa';
import {FaFacebookF } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';
import {FaLinkedinIn } from 'react-icons/fa';
import {FaYoutube } from 'react-icons/fa';




const Footer = () => {
    return ( 
        <footer>
            <section className="footer-sec">
                <div>
                    <img src="assets/img/logo.png" alt=""/>
                    <p>Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
                    <p id="copyright">&#169; 2020 Thousand Sunny. All rights reserved </p>
                </div>
                <div>
                    <h3>Destinations</h3>
                    <ul>
                        <li>
                            <p>Africa</p>
                        </li>
                        <li>
                            <p>Antarctica</p>
                        </li>
                        <li>
                            <p>Asia</p>
                        </li>
                        <li>
                            <p>Europe</p>
                        </li>
                        <li>
                            <p>America</p>
                        </li>
                    </ul>
                </div>
                <div>
                <h3>Shop</h3>
                    <ul>
                        <li>
                            <p>Destination Guides</p>
                        </li>
                        <li>
                            <p>Pictorial & Gifts</p>
                        </li>
                        <li>
                            <p>Special Offers</p>
                        </li>
                        <li>
                            <p>Delivery Times</p>
                        </li>
                        <li>
                            <p>FAQs</p>
                        </li>
                    </ul>
                </div>
                <div>
                <h3>Interests</h3>
                    <ul>
                        <li>
                            <p>Adventure Travel</p>
                        </li>
                        <li>
                            <p>Art And Culture</p>
                        </li>
                        <li>
                            <p>Wildlife And Nature</p>
                        </li>
                        <li>
                            <p>Family Holidays</p>
                        </li>
                        <li>
                            <p>Food And Drink</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="icons">
                    <a href="https://twitter.com/"><FaTwitter /></a>
                    <a href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                    <a href="https://www.youtube.com/"><FaYoutube/></a>
                </section>
        </footer>
     );
}
 
export default Footer;