import { Link } from "react-router-dom"
import "./style.css"

export default function Error() {
    return (
       <div className="error">
            <h1 className="errorcode">404</h1>
            <h4>Oups ! La page que vous demandez n'existe pas.</h4>
            <div className="return">
                <Link to="/">
                    <h4>Retourner a l'accueil</h4>
                </Link>
            </div>
       </div> 
    )
}