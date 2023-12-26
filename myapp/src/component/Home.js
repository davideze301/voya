import { SiWikivoyage } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";


function Home(){
    return(
        <>
    <nav className="navbar navbar-light bg-light">
  <div className="container">
  <li className="nav-item">
          <a class="nav-link" href="#">CUSTOMER SERVICE</a>
          <p><FaPhoneAlt />+2348089548076</p>
        </li>
    <form className="d-flex mine">
      <input className="form-control me-2 w-20" type="search" placeholder="Search for all kinds of products" aria-label="Search"/>
      <button className="btn btn-outline-light"><FaSearch /></button>
  </form>
  <li className="nav-item">
  <p className="gym">
    <a href="https://web.facebook.com/"> <FaFacebook /></a>
    <a href="https://web.instagram.com/"><FaInstagram /></a>
    <a href="https://web.x-twitter.com/"><FaXTwitter /></a>
    <a href="https://web.tiktok.com/"><FaTiktok /></a>
    
    
    </p>
        </li>
       </div>
</nav>
<nav className="navbar navbar-expand-lg navbar-light right">
  <div className="container-fluid left">
    <a className="navbar" href="#"><SiWikivoyage/>VOYAGE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
       <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <a className="" href="">Destinations</a>
        </li>
        <li className="nav-item">
          <a className="" href="">Crushing</a>
        </li>
        <li className="nav-item">
          <a className="" href="">Special</a>
        </li>
        <li className="nav-item">
          <a className="" href="">Holiday</a>
        </li>
        <li className="nav-item">
        <Link to="/blogs"> Blogs</Link>
        </li>
        <li className="nav-item">
          <a className="" href="">About us</a>
        </li>
        <li className="nav-item">
          <a className="" href="https://web.whatsapp.com/">Contact us</a>
        </li>
        <li className="nav-item">
          
          
        <p><FaRegUser style={{color:"white",fontWeight:"500",fontSize:"14px"}}/><span style={{color:"white",fontWeight:"500",fontSize:"14px"}}>Account</span></p>
        </li>
      </ul>
      <span className=" btn-signup">
      <Link to="/register"> REGISTER</Link>
          
       </span>
    
       <span className="btn-signup "> 
      <Link to="/Login"> LOG IN</Link>
        </span>
    </div>
  </div>
</nav>
      
<div className="image">
  
</div>
<div className="container-fluid bing">
  <div className="row welcome">
    <div className="col-md-4 mb-5">
    <p >Find Your</p>
    <p>HOLIDAY <FaLocationDot /></p>
    </div>
    <div className="col-md-4 mb-5">
    <span>Where</span>
    <input type="text" placeholder="destinations" className="p-2" id="search"></input>
    </div>
    <div className="col-md-4 mb-5">
      <span>When</span>
<input type="date" placeholder="select date" className="p-2"/>
<button className="btn outline-success p-2 text-light bg-dark" type="submit">Search</button>

    </div>
  </div>
</div>
{/* <div className="glide">
  <div className="glide__track" data-glide-el="track">
    <ul className="glide__slides">
    <img src="image/Qatar.jpg"/>
      <img src="image/Qatar.jpg"/>
      <img src="image/Qatar.jpg"/>
    </ul>
  </div>
</div> */}
<div className="pack">
  <h4 >Special offer</h4>
  <p>Best 2023 Packages where People wish to stay</p>
 </div>
 <div className="container image1 ">
 <div className="row ">
  <div className="col-md-3 mb-5 ">
    <div className="about-div">
    <img src="image/singapore.jpg" alt=""/>
    <div className="about-div2">
    <p>Visit on of the most beautiful place in qatar</p>
    </div>
    </div>
  </div>
  <div className="col-md-3 mb-5">
    <div className="about-div">
    <img src="image/london.jpg" alt=""/>
    <div className="about-div2">
    <p>Come and enjoy Your hoiday summer in london</p>
    </div>
    </div>
  </div>
  <div className="col-md-3 mb-5">
  <div className="about-div">
    <img src="image/china.jpg" alt=""/>
    <div className="about-div2">
    <p>Visit the most populated country in the world</p>
    </div>
    </div>
  </div>
  <div className="col-md-3 mb-5">
  <div className="about-div">
    <img src="image/london.jpg" alt=""/>
    <div className="about-div2">
    <p>Find a cormfortable place and enjoyable place in Toronto,Canada</p>
    </div>
    </div>
  </div>
  </div>
  </div>
  <div className="image2">
  <div className="holi">
    <h4>Holiday Type</h4>
    <p>Where do you want to enjoy your holiday</p>
  </div>
</div>
<div className="fowl">
    <h4>HAPPY CLIENTS</h4>
    <p>What our customers says concerning our service</p>
  </div>
  <div className="container">
  <div className="row">
    <div className="col-md-3 mb-4">
      <div className="cross">
      <p>Lorem ipsum dolor sit amet consectetur adipicising
elit.Hic aut minima cum dolore quo veritatis harum
teenetur ex maiores ipsum paritur natus.Deserunt
tempore autem,esse</p>
<div className="cross2 ">
<img src="image/avatar.jpg" alt=""/>
</div>
</div>
</div>
<div className="col-md-3 mb-4 ">
  <div className="cross">
<p>Lorem ipsum dolor sit amet consectetur adipicising
elit.Hic aut minima cum dolore quo veritatis harum
teenetur ex maiores ipsum paritur natus.Deserunt
tempore autem,esse</p>
<div className="cross2">
<img src="image/avatar.jpg" alt=""/>
</div>
</div>
</div>
<div className="col-md-3 mb-4 ">
  <div className="cross">
      <p>Lorem ipsum dolor sit amet consectetur adipicising
elit.Hic aut minima cum dolore quo veritatis harum
teenetur ex maiores ipsum paritur natus.Deserunt
tempore autem,esse</p>
<div className="cross2">
<img src="image/avatar.jpg" alt=""/>
</div>
</div>
</div>
<div className="col-md-3 mb-4">
  <div className="cross">
      <p>Lorem ipsum dolor sit amet consectetur adipicising
elit.Hic aut minima cum dolore quo veritatis harum
teenetur ex maiores ipsum paritur natus.Deserunt
tempore autem,esse</p>
<div className="cross2">
<img src="image/avatar.jpg" alt=""/>
</div>
</div>
</div>
  </div>
</div>
<div className="container-fluid tea mt-5">
  <div className="row sell">
    <div className="col-md-4 mt-5">
      <h4>Newspaper</h4>
      <p> Subscribe to our youtube channel <a href="https://web.youtube.com/"><FaYoutube /></a></p>
      <input type="suscribe" placeholder="subscribe"/>
      <div>
      <button>Go</button>
      </div>
    </div>
    <div className="col-md-4 mt-5">
      <h4>Latest News</h4>
      <img src="image/avatar.jpg" alt=""/><p>Lets walk together</p>
      <img src="image/avatar.jpg" alt=""/><p>come and join us now</p>
    </div>
    <div className="col-md-4 mt-5">
      <h4>Contact us</h4>
      <input type="suscribe" placeholder=" your name"/>
      <p id="name"></p>
      <p> <FaPhoneAlt />Phone number </p>
      <input type="suscribe" placeholder=""/>
      <p><FaRegEnvelope/>Your e-mail address</p>
      <input type="suscribe" placeholder=" @gmail.com"/>
      <div>
      <button>Submit</button>
      </div>
      </div>
      <hr className="line"/>
      <p className="yeet">@2023 VOYAGE</p>
  </div>
</div>






     

        </>
    )
}

export default Home