import { SiWikivoyage } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function Blog(){
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
  <p><FaFacebook /> <FaInstagram /> <FaXTwitter /> <FaTiktok /></p>
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
          <a className="" aria-current="page" href="">Home</a>
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
        <Link to="/blog"> Blog</Link>
        </li>
        <li className="nav-item">
          <a className="" href="">About us</a>
        </li>
        <li className="nav-item">
          <a className="" href="https://web.whatsapp.com/">Contact us</a>
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
    
    
    
    
    
    
    
    
    
    
    
    
    </>





  )  
}
export default Blog