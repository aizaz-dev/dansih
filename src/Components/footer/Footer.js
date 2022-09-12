import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top__footer">
          <div className="item">
            <h2 className="logo">AXIS</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              illum!
            </p>
          </div>
          <div className="item">
            <h3>My Account</h3>
            <ul>
              <li>
                <a href="#">Auther</a>
              </li>
              <li>
                <a href="#">Collection</a>
              </li>
              <li>
                <a href="#">Auther profile</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="item">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">live Aucction</a>
              </li>
              <li>
                <a href="#">Bidding</a>
              </li>
              <li>
                <a href="#">Bet Now</a>
              </li>
            </ul>
          </div>
          <div className="item">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Our Blog</a>
              </li>
              <li>
                <a href="#">Explore </a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          {/* <div className="item">
            <h3>Subscribe Us</h3>
            <div className="input">
              <input placeholder="Enter Your Email" type="text" name="" id="" />
              <button className="sub-btn">Subscribe</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="bottom__footer">© 2022 website | All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
