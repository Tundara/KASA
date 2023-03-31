import logo from "../../images/logo.svg"
import "./style.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <header>
            <nav>
                <img src={logo}></img>
                <div className="navButton">
                    <Link to="/" className="alink">ACCUEIL</Link>
                    <Link to="/about" className="alink">A PROPOS</Link>
                </div>
            </nav>
        </header>
    )
}
