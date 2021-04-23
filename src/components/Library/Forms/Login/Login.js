import React, {Component} from "react";
import "./Login.css"
import StyleReader from "../../../../utils/StyleReader";
import mask from "../Phone/phoneMask";

class Login extends Component {
    state = {
        value: ''
    }

    render() {
        const {componentsState, componentName, typeForm} = this.props;
        const componentStyle = componentsState && componentsState[componentName];
        let styleReader = new StyleReader(componentStyle);
        let defaultLabel = typeForm || componentsState[componentName].type;
        let type = 'text';

        if (defaultLabel === "Password") {
            type = 'password';
        }

        let label = this.props.children || defaultLabel;

        return (
            <form className={styleReader.userClassName + "email__group"}>
                <input type={type}
                       onChange={this.handleChange}
                       className={"email__input"}
                       placeholder=""
                       value={this.state.value}
                       style={styleReader.style}/>
                <label className={"email__label"}>{label}</label>
            </form>
        )
    }

    handleChange = (event) => {
        const {componentsState, componentName, typeForm} = this.props;
        if (typeForm === "Telephone" || componentsState[componentName].type === "Telephone") {
            let input = document.querySelector(".email__input");
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
            input.addEventListener("keydown", mask, false);

            this.setState({
                value: event.target.value
            })
        } else {
            this.setState({
                value: event.target.value
            })
        }
    }
}

export default Login;