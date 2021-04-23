import React, {Component} from "react";
import "./Phone.css"
import StyleReader from "../../../../utils/StyleReader";
import mask from "./phoneMask";

class Phone extends Component {
    state = {
        value: '',
    }

    render () {
        const {componentsState, componentName} = this.props;
        const componentStyle = componentsState && componentsState[componentName];
        let styleReader = new StyleReader(componentStyle);

        return (
            <form>
                <input type="tel"
                       id="tel"
                       className={styleReader.userClassName + " phoneInput"}
                       style={styleReader.style}
                       placeholder={"+7 (777) 777 7777"}
                       onChange={this.handleChange}
                       value={this.state.value}/>
            </form>
        )
    }

    handleChange = (event) => {
        let input = document.querySelector("#tel");
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

        this.setState({
            value: event.target.value
        })
    }
}

export default Phone;