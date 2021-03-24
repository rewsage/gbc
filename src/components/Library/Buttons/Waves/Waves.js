import React, {Component} from 'react';
import "./Waves.css"

class Waves extends Component {
    render() {
        const properties = this.props.className.split(" ");
        const colors = {background: '',
                        color: ''}
        let size;
        let allUserClass = [];
        let text = this.props.children ? this.props.children : "Scooby Doo";
        for (let property of properties) {
            let propertyName = property.split("-")[0];
            let value = property.split("-")[1];
            if (propertyName === "cl") {
                colors["color"] = value;
            } else if (propertyName === "bg") {
                colors["background"] = value;
            } else if (propertyName === "sz") {
                size = value;
            } else {
                allUserClass.push(propertyName);
            }
        }
        let fullClass;
        if (size === "small") {
            fullClass = `${allUserClass.join(" ")} buttonWaves Small`;
        } else if (size === "medium") {
            fullClass = `${allUserClass.join(" ")} buttonWaves Medium`;
        } else {
            fullClass = `${allUserClass.join(" ")} buttonWaves`;
        }
        return (<button className={`${fullClass}`} style={colors}>
            <p>{text}</p>
            <span className={"buttonWaves__inner"}>
                    <span className={"buttonWaves__wave"}></span>
                    <span className={"buttonWaves__wave"}></span>
                    <span className={"buttonWaves__wave"}></span>
                    <span className={"buttonWaves__wave"}></span>
                </span>
        </button>);
    }
}

export default Waves;