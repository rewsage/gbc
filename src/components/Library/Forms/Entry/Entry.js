import React, {Component} from "react";
import "./Entry.css"
import StyleReader from "../../../../utils/StyleReader";
import Login from "../Login/Login";
import * as components from "../../../../utils/Hub";

class Entry extends Component {
    render() {
        const {componentsState, componentName} = this.props;
        const componentStyle = componentsState && componentsState[componentName];
        const loginType = componentStyle.login;
        let styleReader = new StyleReader(componentStyle);
        let nameForm = this.props.children || "Вход";
        const buttonName = componentStyle.btn;
        const buttonText = componentsState[buttonName].text;
        const Button = components[buttonName];

        return (
            <form className={styleReader.userClassName + " entry"}
                  style={styleReader.style}>
                <h1 className={"entry__title"}>{nameForm}</h1>
                <Login componentsState={componentsState}
                       componentName={"Login"}
                       typeForm={loginType}/>
                <Login componentsState={componentsState}
                       componentName={"Login"}
                       typeForm={"Password"}/>
                <Button componentsState={componentsState}
                        componentName={buttonName}>
                    {buttonText}
                </Button>
            </form>
        )
    }
}

export default Entry;