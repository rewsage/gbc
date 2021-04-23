import React from "react";
import "./Card.css";
import img from "./product3.jpg";
import StyleReader from "../../../../utils/StyleReader";
import * as components from "../../../../utils/Hub"

class Card extends React.Component {
    render() {
        const {componentsState, componentName} = this.props;
        const componentStyle = componentsState && componentsState[componentName];
        let description = this.props.children || "Lorem ipsum dolor sit amet," +
                                                 " consectetur adipisicing elit." +
                                                 " Aperiam eligendi impedit molestiae nisi.";
        let styleReader = new StyleReader(componentStyle);
        let urlImg = styleReader.img || img;

        const buttonName = componentStyle.btn
        const buttonText = componentsState[buttonName].text;
        const Button = components[buttonName];

        return(
            <div className={styleReader.userClassName + "card"} style={styleReader.style}>
                <img className={"card__img"} src={urlImg} alt="Wrong URL address"/>
                <p className={"card__description"}>
                    {description}
                </p>
                <Button componentsState={componentsState}
                        componentName={buttonName}>
                    {buttonText}
                </Button>
            </div>
        )
    }
}

export default Card;