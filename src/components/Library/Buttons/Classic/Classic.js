import React, {Component} from 'react';
import "./Classic.css"
import StyleReader from "../../../../utils/StyleReader";

class Classic extends Component {
    render() {
        const {componentsState} = this.props;
        const componentStyle = componentsState && componentsState["Classic"];
        const text = this.props.children || "Scooby Doo";
        const styleReader = new StyleReader(componentStyle);

        return (
            <button className={styleReader.userClassName + "classic-btn"}
                    style={styleReader.style}
                    onClick={ e => this.handleClick(e) }>
                {text}
            </button>
        )
    }

    handleClick(e) {
        e.preventDefault();
    }
}

export default Classic;