import '../styles/Footer.css';
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaFacebookMessenger} from "@react-icons/all-files/fa/FaFacebookMessenger";
import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";

function Footer() {
      return (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <h3>Useful Links</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3>Contact Us</h3>
                <ul>
                  <li>123 Main St</li>
                  <li>Anytown, USA 12345</li>
                  <li>(123) 456-7890</li>
                  <li>contact@example.com</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3>About Our Organization</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3>Connect With Us</h3>
                <ul className="social-icons">
                <li><FaFacebook/></li>
                <li><FaFacebookMessenger/></li>
                <li><FaLinkedin/></li>
                <li><FaInstagram /></li>
                <li><FaTwitter/></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="copy-right">&#169; 2023 All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      );
    }
    
    export default Footer;
