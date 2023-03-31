import "./style.css"

export default function TagBox(props) {
    return (
        props.items.map((tag, index) => {
            return (
                <div className="tag" key={index}>
                    <div>{tag}</div>
                </div>
            );
        })
    )
}