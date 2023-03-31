import "./style.css"
import banner from "../../images/banner.png"

export default function Banner() {
    return (
        <div className="banner">
            <img className="bannerImg" src={banner}></img>
            <div className="centered"><h2>Chez vous, partout et ailleurs</h2></div>
        </div>
    )
}