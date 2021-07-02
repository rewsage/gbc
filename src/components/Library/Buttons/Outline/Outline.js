import React, {Component} from "react";
import StyleReader from "../../../../utils/StyleReader";
import styled from "styled-components";
import "./Outline.css"


class Outline extends Component {
    render() {
        const {componentsState} = this.props;
        const componentStyle = componentsState && componentsState["Outline"];
        const text = this.props.children || "Scooby Doo";
        const styleReader = new StyleReader(componentStyle);

        const mainColor = componentStyle['bc'] || "#0071f0";
        const Button = styled.button`
          border: ${mainColor} solid 3px;
          color: ${mainColor};
          &:hover {
            background: ${mainColor};
            color: ${componentStyle['clh'] || '#fff'};
          }
        `;

        return (
            <Button className={this.props.className + " outline-btn"}
                    style={styleReader.style}
                    onClick={ e => this.handleClick(e) }>
                {text}
            </Button>
        )
    }

    handleClick(e) {
        e.preventDefault();
    }
}

export default Outline;