import "./style.css"
import logoWhite from "../../images/LOGO_white.svg"

export default function Footer() {
    return (
        <footer>
            <div className="footerdiv">
                <img className="logoclass" src={logoWhite}></img>
                <h5>© 2020 Kasa. All rights reserved</h5>
            </div>
            
        </footer>
    )
}