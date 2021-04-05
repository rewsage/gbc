import React from "react";
import "./Card.css";
import product3 from "./product3.jpg";
import StyleReader from "../../../../utils/StyleReader";

class Card extends React.Component {
    render() {
        let description = this.props.children || "Lorem ipsum dolor sit amet," +
                                                 " consectetur adipisicing elit." +
                                                 " Aperiam eligendi impedit molestiae nisi.";
        let styleReader = new StyleReader(this.props.className);

        return(
            <div className={styleReader.userClassName + "card"} style={styleReader.style}>
                <img className={"card__img"} src={product3} alt="Uuups"/>
                <p className={"card__price"}>price: 99$</p>
                <p className={"card__description"}>
                    {description}
                </p>
            </div>
        )
    }
}

export default Card;