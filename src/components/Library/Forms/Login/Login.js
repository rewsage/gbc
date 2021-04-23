import React, {Component} from "react";
import "./Login.css"
import StyleReader from "../../../../utils/StyleReader";
import mask from "../Phone/phoneMask";

class Login extends Component {
    state = {
        value: ''
    }

    render() {
        let styleReader = new StyleReader(this.props.className);
        let defaultLabel = styleReader.typeForm;
        let type = 'text';

        if (defaultLabel === "Password") {
            type = 'password';
        }

        let label = this.props.children || defaultLabel;
        const style = styleReader.style;

        return (
            <form className={styleReader.userClassName + "email__group"}>
                <input type={type}
                       onChange={this.handleChange}
                       className={"email__input"}
                       placeholder=""
                       value={this.state.value}
                       style={{fontSize: style.fontSize,
                               fontWeight: style.fontWeight,
                               color: style.color,
                               borderBottomColor: style.borderColor,
                               borderBottomWidth: style.borderWidth}}/>
                <label className={"email__label"}>{label}</label>
            </form>
        )
    }

    handleChange = (event) => {
        let styleReader = new StyleReader(this.props.className);
        if (styleReader.typeForm === "Telephone") {
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