import "./style.css"
import Banner from "../../compoments/Banner"
import { useEffect, useState } from "react"
import ArticleBox from "../../compoments/ArticleBox"

export default function Home() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/logements.json")
        .then((e) => e.json())
        .then((data) => {
            setItems(data)
        })
    }, [])

    return (
        <div className="Home">
            <Banner />
            <div className="articlesbloc">
            {items.map((item, key) => (
                <ArticleBox item={item} key={key} />
            ))}
            </div>
        </div>
    )
}