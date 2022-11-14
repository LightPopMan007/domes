import React from 'react';
import style from '../styles/landingpage.module.css'

const Footer = () => (
    <footer>
    <div className={style.ftr}>
        <div className={style.company}>
            <h4>Company Info</h4>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Carreer</a></li>
                <li><a href="#">We Are Hiring!</a></li>
                <li><a href="#">Blog</a></li>

            </ul>
        </div>


        <div className={style.legal}>
            <h4>Legal</h4>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">We Are Hiring!</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>

        
        <div className={style.features}>
            <img src="./Images/logofindaplace.png" alt="" />
        </div>


        <div className={style.resources}>
            <h4>Resources</h4>
            <ul>
                <li><a href="#">iOS and Android</a></li>
                <li><a href="#">Watch a Demo</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">API</a></li>
            </ul>
        </div>


        <div className={style.intouch}>
            <h4>Get In Touch</h4>
            <ul>
                <li><a href="#"> <img src="./Images/phone.png" alt="" /> 0777-077-077 </a></li>
                <li><a href="#"> <img src="./Images/location.png" alt="" />  Ngong-Lane Plaza </a></li>
                <li><a href="#"> <img src="./Images/mail.png" alt="" />  info@moringaschool.com </a></li>
                
            </ul>
        </div>
    </div>
</footer>
);

export default Footer;
