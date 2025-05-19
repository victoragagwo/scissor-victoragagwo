import "./styling/myurls.css";
import rec1 from "./assets/rec1.png"
import rec2 from "./assets/rec2.png"
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Autfaqs from "./components/autfaqs";

function Myurls () {
    return (
        
        <div>
            <div className="div1">
                <h1>Optimize Your Online Experience with Our</h1>                   
                <h1> Advanced <span className="urls">URL Shortening</span> Solution</h1>
            </div>
            <div className="div2">
            <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs,</p>
             <p> branded links, and domain customization options to reinforce your brand presence and</p> 
            <p>enhance user engagement.</p>
            </div>
            <div className="div3">
                <a href="#"><button className="button">Sign Up</button></a>
                <a href="#"  style={{color:"#0065FE"}} className="ed">Learn more</a>
            </div>
            <div className="rec1">
                <img src={rec1} alt="rec1" className="rec1" />
            </div>
            <div className="rec2">
                <img src={rec2} alt="rec2" className="rec2" />
            </div>
            <div className="grey">
                <div>
                <h2>One Stop.</h2>
                <h2>Four <span style={{color:"#0065FE"}}>Possibilities</span></h2>
                </div>
                <div>
                <h3>3M</h3>
                <p>Active Users</p>
                </div>
                <div>
                <h3>60M</h3>
                <p>Links & QR<br/>codes created</p>
                </div>
                <div>
                <h3>1B</h3>
                <p>Clicked & Scanned<br/>connections</p>
                </div>
                <div>
                <h3>300k</h3>
                <p>App Integrations</p>
                </div>
                
            </div>
            <div className="scissors" id="features">
                <div className="why">
                   <h2><span className="vec2">Why</span> choose <span  style={{color:"#0065FE"}}>Scissors</span></h2>
                   <p>Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none.</p>
                </div>
                <div className="sidewhy">
                    <div>
                        <h3><span className="ic1">URL Shortening</span></h3>
                        <p>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                    </div>
                <div>
                    <h3><span className="ic2">Custom URLs</span></h3>
                    <p>With Scissor, you can create custom URLs, witht the length you want! A solution for socials and business</p>
                </div>
                <div>
                    <h3><span className="ic3">QR Codes</span></h3>
                    <p>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                </div>
                <div>
                    <h3><span className="ic4">Data Analytics</span></h3>
                    <p>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                </div>
                </div>
            </div>
            <div className="perf" id="pricing">
                <h1 style={{marginBottom:"10px"}}><span className="vec">A</span><span style={{color:"#0065FE"}}> price perfect</span> for your needs.</h1>
                <p>From catering for your personal, business, event, socials needs, you can be</p>
                <p> rest assured we have you in mind in our pricing.</p>
            </div>
            <div className="pricing">
                <div className="free">
                    <p style={{fontSize:"18px", marginBottom:"25px"}}>Basic</p>
                    <h2>Free</h2>
                    <p style={{fontSize:"18px"}}>Free plan for all users</p>
                    <div className="pcheck">
                        <li>Unlimited URL Shortening</li>
                        <li>Basic Link Analysis</li>
                        <li>Customizable Short Links</li>
                        <li>Standard Support</li>
                        <li>Ad-supported</li>
                    </div>
                </div>
                <div className="prof">
                    <p style={{fontSize:"18px", marginBottom:"25px"}}>Professional</p>
                    <h2>Free</h2>
                    <p style={{fontSize:"18px"}}>Free plan for all users</p>
                    <div className="profcheck">
                        <li>Unlimited URL Shortening</li>
                        <li>Basic Link Analysis</li>
                        <li>Customizable Short Links</li>
                        <li>Standard Support</li>
                        <li>Ad-supported</li>
                    </div>
                </div>
                <div className="teams">
                    <p style={{fontSize:"18px", marginBottom:"25px"}}>Teams</p>
                    <h2>$25/month</h2>
                    <p style={{fontSize:"18px"}}>Share with up to 10 users</p>
                    <div className="pcheck">
                        <li>Team Collaboration</li>
                        <li>User Roles and Permissions</li>
                        <li>Enhanced Security</li>
                        <li>API Access</li>
                        <li>Dedicated Account Manager</li>
                    </div>
                </div>
            </div>
            <div className="div3">
                <a href="#" style={{padding:"10px", border:"1px solid #0065FE", borderRadius:"20px", color:"#0065FE"}} className="resbutton">Get Custom Pricing</a>
                <a href="#"><button>Select Pricing</button></a>
            </div>
            <div className="trimdiv" id="analytics">
                <div className="trimbox">
                    <div className="trim">
                        <input type="text" placeholder="Paste URL here..." className="input" />
                    </div>
                    <div className="trim2">
                        <div className="input2-container">
                            <input type="text" placeholder="Choose Your URL" className="input2"/>
                        </div>
                        <div className="input3-container">
                            <input type="text" placeholder="Type Alias here" className="input3" />
                        </div>
                    </div>
                    <div className="trim3">
                        <button className="trimbutton">Trim  URL</button> 
                    </div>
                    <div>
                        <p>By clicking TrimURL, I agree to the <span style={{color:"blue", fontWeight:"bold"}}>Terms of Service, Privacy Policy</span> and Use of Cookies.</p>
                    </div>
                </div>
            </div>
            <Autfaqs/>
        </div>
    );
}

export default Myurls;