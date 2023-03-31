import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Caroussel from "../../compoments/Caroussel"
import TagBox from "../../compoments/TagBox"
import "./style.css"
import Collapse from "../../compoments/Collapse"
import Error from "../ErrorCode"
import Stars from "../../compoments/Stars"

export default function Article() {
    const param = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/logements.json")
        .then((e) => e.json())
        .then((e) => {
            setItems(e)
        })
    }, [])
    

    return (
        <div className="articlePage">
        {items.find(item => item.id === param.id) ? (
            items
              .filter(item => item.id === param.id)
              .map(item => (
                <div key={item.id}>
                  <Caroussel imgs={item.pictures} page={3} />
                  <div className="desc">
                    <div className="lefttext">
                        <h1>{item.title}</h1>
                        <h4>{item.location}</h4>
                    </div>
                    <div className="righttext">
                        <div className="hostName"><h3>{item.host.name}</h3></div>
                        <div className="profilepic"><img className="profilePicture" src={item.host.picture}></img></div>
                    </div>
                  </div>
                  <div className="subDesc">
                    <div className="taglist">
                        <TagBox items={item.tags} />
                    </div>
                    <div className="starRate">
                        <Stars rate={item.rating} />
                    </div>
                  </div>
                  <div className="collapses">
                    <Collapse description={item.description} type="Description" />
                    <Collapse description={item.equipments} type="Equipements" />
                  </div>
                </div>
              ))
          ) : (
            <Error />
          )}
        </div>
    )
}

function check(lol) {
    if (lol < 1) {
        return (
            <Error />
        )
    }
}