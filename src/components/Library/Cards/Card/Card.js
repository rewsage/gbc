import React from "react";
import "./Card.css";
import defaultImg from "./product3.jpg";
import StyleReader from "../../../../utils/StyleReader";
import * as components from "../../../../utils/Hub";

class Card extends React.Component {
    render() {
        const {componentsState, componentName} = this.props;
        const componentStyle = componentsState && componentsState[componentName];
        const description = this.props.children || "Lorem ipsum dolor sit amet," +
                                                 " consectetur adipisicing elit." +
                                                 " Aperiam eligendi impedit molestiae nisi.";
        const styleReader = new StyleReader(componentStyle);
        const url = styleReader.url || defaultImg;

        const buttonName = componentStyle.btn || 'Classic';
        const buttonText = componentsState[buttonName].text;
        const Button = components[buttonName];

        return(
            <div className={styleReader.userClassName + "card"} style={styleReader.style}>
                <img className={"card__img"} src={url} alt="Wrong URL address"/>
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