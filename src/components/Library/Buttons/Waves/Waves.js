import React, {Component} from 'react';
import "./Waves.css"
import StyleReader from "../../../../utils/StyleReader";

class Waves extends Component {
    render() {
        const {componentsState} = this.props;
        const componentStyle = componentsState && componentsState["Waves"];
        let text = this.props.children || "Scooby Doo";
        let styleReader = new StyleReader(componentStyle);

        return (
            <button className={styleReader.userClassName + "buttonWaves"} style={styleReader.style}>
                <p>{text}</p>
                <span className={"buttonWaves__inner"}>
                    <span className={"buttonWaves__wave"}/>
                    <span className={"buttonWaves__wave"}/>
                    <span className={"buttonWaves__wave"}/>
                    <span className={"buttonWaves__wave"}/>
                </span>
            </button>
        );
    }
}

export default Waves;