import "./style.css"
import arrow from "../../images/arrow_collapse.svg"
import { useEffect, useState } from "react"

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState([false])
    return (
        <div className="princip">
            <div onClick={() => setIsOpen(!isOpen)} className="collapsebox">
                <div>{props.type}</div>
                <img className={isOpen ? "arrowopen" : "arrowclose"} src={arrow}></img>
            </div>
            <div className={isOpen ? "hidden" : "textbox"}>
                {Array.isArray(props.description) ? props.description.map((item, index) => {
                    return (
                        <div key={index}>{item}</div>
                    )
                }) : <div>{props.description}</div>}
            </div>
        </div>
    )
}