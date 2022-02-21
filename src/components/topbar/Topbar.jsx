import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo"><img src="/img/logo.svg" alt="logo" /></a>
                <div className="itemContainer">
                    <Person/>
                    <span>06 85 46 08 44</span>
                </div>
                <div className="itemContainer">
                    <Mail/>
                    <span>campos.sylvain@gmail.com</span>
                </div>
            </div>
            
            <div className="right">
                <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
