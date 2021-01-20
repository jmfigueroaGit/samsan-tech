import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          <h2>AYOCOVID</h2>
          <div className="socials">
            <pre>Socials</pre>
            <img src="./socials.svg" alt="socials logo" />
          </div>
          <div className="contact">
            <pre>Contact</pre>
            <p>
              samsantech@covid.com <br />
              09784512963
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
