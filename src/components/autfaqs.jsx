import FAQs from "./FAQs";
import React, { useState } from "react";
import "../styling/autfaqs.css";
import { faEnvelope, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Foot from "../assets/foot.png";
function Autfaqs () {
   const [openIndex, setOpenIndex] = useState(null);
return (
    <div>
      <div className="autfaqs" id="faqs">
        <h1><span className="faq1">FAQS</span></h1>
      </div>
      <div className="autfaqs2">
        <div className="faqsmin">
          <div
            className="faqsmin1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
          >
            <h4 style={{ fontWeight: "normal" }}>How does URL shortening work?</h4>
            <FontAwesomeIcon
              icon={openIndex === 0 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 0 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 0 && (
            <div>
              <p>
                URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="autfaqs3">
        <div className="faqsadd">
          <div
            className="faqsadd1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
          >
            <h4 style={{ fontWeight: "normal" }}>Is it necessary to create an account to use the URL shortening service?</h4>
            <FontAwesomeIcon
              icon={openIndex === 1 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 1 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 1 && (
            <div>
              <p>
                No, you don’t need an account to shorten a URL, but creating one gives you access to extra features like link tracking and customization.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="autfaqs3">
        <div className="faqsadd">
          <div
            className="faqsadd1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
          >
            <h4 style={{ fontWeight: "normal" }}>
              Are the shortened links permanent? Will they expire?
            </h4>
            <FontAwesomeIcon
              icon={openIndex === 2 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 2 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 2 && (
            <div>
              <p>
                Most shortened links are permanent, but some may expire after a period of inactivity, especially if created without an account. Check the service’s policy for details.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="autfaqs3">
        <div className="faqsadd">
          <div
            className="faqsadd1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
          >
            <h4 style={{ fontWeight: "normal" }}>
              Are there any limitations on the number of URLs I can shorten?
            </h4>
            <FontAwesomeIcon
              icon={openIndex === 3 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 3 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 3 && (
            <div>
              <p>
                Yes, some services limit the number of URLs you can shorten, especially without an account. Higher limits may be available with a free or paid account.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="autfaqs3">
        <div className="faqsadd">
          <div
            className="faqsadd1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 4 ? null : 4)}
          >
            <h4 style={{ fontWeight: "normal" }}>
              Can I customize the shortened URLs to reflect my brand or content?
            </h4>
            <FontAwesomeIcon
              icon={openIndex === 4 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 4 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 4 && (
            <div>
              <p>
                Yes, many services let you create custom or branded URLs, usually with an account.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="autfaqs3">
        <div className="faqsadd">
          <div
            className="faqsadd1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 5 ? null : 5)}
          >
            <h4 style={{ fontWeight: "normal" }}>
              Can I track the performance of my shortened URLs?
            </h4>
            <FontAwesomeIcon
              icon={openIndex === 5 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 5 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 5 && (
            <div>
              <p>
                Yes, most URL shorteners offer click tracking and analytics, especially if you're signed in.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="autfaqs3">
        <div className="faqsadd">
          <div
            className="faqsadd1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 6 ? null : 6)}
          >
            <h4 style={{ fontWeight: "normal" }}>
              How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?
            </h4>
            <FontAwesomeIcon
              icon={openIndex === 6 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 6 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 6 && (
            <div>
              <p>
                Reputable services use security checks and spam filters to protect against malicious links, but users should still be cautious when clicking unknown URLs.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="autfaqs3">
        <div className="faqsadd">
          <div
            className="faqsadd1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 7 ? null : 7)}
          >
            <h4 style={{ fontWeight: "normal" }}>
              What is a QR code and what can it do?
            </h4>
            <FontAwesomeIcon
              icon={openIndex === 7 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 7 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 7 && (
            <div>
              <p>
                A QR code is a type of barcode that can be scanned with a smartphone to quickly open a link, display text, or trigger other actions.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="autfaqs3">
        <div className="faqsadd">
          <div
            className="faqsadd1"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenIndex(openIndex === 8 ? null : 8)}
          >
            <h4 style={{ fontWeight: "normal" }}>
              Is there an API available for integrating the URL shortening service into my own applications or websites?
            </h4>
            <FontAwesomeIcon
              icon={openIndex === 8 ? faMinus : faPlus}
              style={{ color: "#212121" }}
              className={openIndex === 8 ? "minus" : "plus"}
            />
          </div>
          {openIndex === 8 && (
            <div>
              <p>
                Yes, most major URL shortening services offer an API for easy integration into apps and websites.
              </p>
            </div>
          )}
        </div>
      </div>

        
            <div className="rev">
                <h1 style={{color:"white"}} className="ed2">Revolutionizing Link Optimization</h1>
                <button className="btn">Get Started</button>
            </div>
            <div className="footer">
                <div className="leftside">
                    <img src={Foot} alt="socials" className="socials" />
                </div>
                <div className="rightside">
                    <div className="r1">
                        <h4>Why Scissor ?</h4>
                        <p>Scissor 101</p>
                        <p>Integrations & API</p>
                        <p>Pricing</p>
                    </div>
                    <div className="r1">
                    <h4>Solutions</h4>
                        <p>Social Media</p>
                        <p>Digital Marketing</p>
                        <p>Customer Service</p>
                        <p>For Developers</p>
                    </div>
                    <div className="r1">
                    <h4>Products</h4>
                        <p>Link Management</p>
                        <p>QR Codes</p>
                        <p>Link-in-bio</p>
                    </div>
                    <div className="r1">
                    <h4>Company</h4>
                        <p>About Scissor</p>
                        <p>Careers</p>
                        <p>Partners</p>
                        <p>Press</p>
                        <p>Contact</p>
                        <p>Reviews</p>
                    </div>
                    <div className="r1">
                    <h4>Resources</h4>
                        <p>Blog</p>
                        <p>Resource Library</p>
                        <p>Developers</p>
                        <p>App Connectors</p>
                        <p>Support</p>
                        <p>Trust Center</p>
                        <p>Browser Extension</p>
                        <p>Mobile App</p>
                    </div>
                    <div className="r1">
                    <h4>Features</h4>
                        <p>Branded Links</p>
                        <p>Mobile Links</p>
                        <p>Campaign</p>
                        <p>Management &</p>
                        <p>Analytics</p>
                        <p>QR Code generation</p>
                    </div>
                    <div className="r1">
                    <h4>Legal</h4>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Terms of Service</p>
                        <p>Acceptable Use Policy</p>
                        <p>Code of Conduct</p>
                    </div>
                    
                </div>

            </div>
            <div className="last">
                <p>Term of Service | Security | Scissor 2023</p>
            </div>
        </div>
    )
}


export default Autfaqs;