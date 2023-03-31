import "./style.css"
import starOn from "../../images/star-on.svg"
import starOff from "../../images/star-off.svg"

export default function Stars(props) {
    const rate = props.rate

    const starsArray = []

    for (let i=0; i < rate; i++) {
        starsArray.push(<div className="staron"><img src={starOn}></img></div>)
    }

    for (let i=rate; i < 5; i++) {
        starsArray.push(<div className="staroff"><img src={starOff}></img></div>)
    }

    return (
        <div className="starsGroup">
            {starsArray}
        </div>
    )
}