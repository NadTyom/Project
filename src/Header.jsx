import slaq from "./images/slaq.png";
import Usflag from "./images/usflag.png";
import cart from "./images/shopping-cart 1.png";
import search from "./images/Search16px.png";


function Header(){
    return(
        <header>
        <div className="header-nav">
          <p>SWAY</p>
          <nav>
            <ul id="clickLii">
              <li>
                Demos
                <img src={slaq} alt="slaq" />
              </li>
              <li>
                Pages
                <img src={slaq} alt="slaq" />
              </li>
              <li>
                Portfolio
                <img src={slaq} alt="slaq" />
              </li>
              <li>
                Blog
                <img src={slaq} alt="slaq" />
              </li>
              <li>
                Shop
                <img src={slaq} alt="slaq" />
              </li>
              <li>
                Blocks
                <img src={slaq} alt="slaq" />
              </li>
              <li>
                Elements
                <img src={slaq} alt="slaq" />
              </li>
              <li>
                Extra
                <img src={slaq} alt="slaq" />
              </li>
            </ul>
          </nav>
          <div className="options">
            <img id="SelectLanguage" src={Usflag} alt="usflag" />
            <img id="cartOpen" src={cart} alt="ruflag" />
            <img id="" src={search} alt="armflag" />
          </div>
          <button className="registerBtn">Register</button>
        </div>
        <div className="about_content">
          <p>Catering should be an experience</p>
          <h1>We use only the finest and freshest ingredients</h1>
          <b>
            At Sway catering we know that food is an important part of life. If
            the meal is not perfect, your event cannot be perfect.
          </b>
          <button>Request a Quote</button>
        </div>
      </header>
    )
}
export default Header;