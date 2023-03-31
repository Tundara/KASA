import { Link } from "react-router-dom"
import "./style.css"

export default function ArticleBox(props) {
    return (
        <Link to={`/article/${props.item.id}`}>
            <div className="article" key={props.key}>
                <img className="article-img" src={props.item.cover} alt="article-img" />
                <h3 className="article-text">{props.item.title}</h3>
            </div>
        </Link>
    )
}