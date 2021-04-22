import React from "react";
import "./Card.css";
import img from "../../../../assets/images/product3.jpg";
import StyleReader from "../../../../utils/StyleReader";
import Waves from "../../Buttons/Waves/Waves";
import Classic from "../../Buttons/Classic/Classic";

class Card extends React.Component {
    render() {
        let description = this.props.children || "Lorem ipsum dolor sit amet," +
                                                 " consectetur adipisicing elit." +
                                                 " Aperiam eligendi impedit molestiae nisi.";
        let styleReader = new StyleReader(this.props.className);
        let currentButton = styleReader.button;
        let urlImg = styleReader.img;
        if (urlImg === '') {
            urlImg = img;
        }
        let {buttonClass} = this.props;

        let Button;
        if (currentButton === "Classic") {
            let buttonText = buttonClass["Classic"]["text"] || "Watch more";
            Button = <Classic className={buttonClass["Classic"]["class"] + "card__button"}>
                         {buttonText}
                     </Classic>;
        } else if (currentButton === "Waves") {
            let buttonText = buttonClass["Waves"]["text"] || "Watch more"
            Button = <Waves className={buttonClass["Waves"]["class"] + "card__button"}>
                         {buttonText}
                     </Waves>;
        }
        return(
            <div className={styleReader.userClassName + "card"} style={styleReader.style}>
                <img className={"card__img"} src={urlImg} alt="Uuups"/>
                <p className={"card__description"}>
                    {description}
                </p>
                {Button}
            </div>
        )
    }
}

export default Card;