import "./style.css"
import arrow from "../../images/arrow.svg"
import arrowleft from "../../images/arrow-left.svg"
import { useState } from "react";

export default function Caroussel(props) {
    const imgs = props.imgs
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleClickPrev = () => {
      setCurrentIndex(currentIndex === 0 ? imgs.length - 1 : currentIndex - 1);
    };
  
    const handleClickNext = () => {
      setCurrentIndex(currentIndex === imgs.length - 1 ? 0 : currentIndex + 1);
    };
  
    return (
      <div className="caroussel">
        <div className="prev" onClick={handleClickPrev}><img src={arrowleft}></img></div>
        <img className="carousselImg" src={imgs[currentIndex]} alt={`Image ${currentIndex}`} />
        <div className="next" onClick={handleClickNext}><img src={arrow}></img></div>
      </div>
    );
};
  