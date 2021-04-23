import React, {Component} from 'react';
import "./Classic.css"
import StyleReader from "../../../../utils/StyleReader";

class Classic extends Component {
    render() {
        const {componentsState, componentName} = this.props;
        const componentStyle = componentsState && componentsState[componentName];
        let text = this.props.children || "Scooby Doo";
        let styleReader = new StyleReader(componentStyle);

        return (
            <button className={styleReader.userClassName + "classic-btn"}
                    style={styleReader.style}>
                {text}
            </button>
        )
    }
}

export default Classic;