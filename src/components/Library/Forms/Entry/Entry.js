import React, {Component} from "react";
import "./Entry.css"
import StyleReader from "../../../../utils/StyleReader";
import Login from "../Login/Login";
import * as components from "../../../../utils/Hub";

class Entry extends Component {
    render() {
        const {componentsState, componentName} = this.props;
        const componentStyle = componentsState && componentsState[componentName];
        const loginType = componentsState["Login"].type || 'Email';

        const styleReader = new StyleReader(componentStyle);
        const formName = this.props.children || "Sign in";

        const buttonName = componentStyle.btn || 'Classic';
        const buttonText = componentsState[buttonName].text;
        const Button = components[buttonName];

        return (
            <form className={styleReader.userClassName + " entry"}
                  style={styleReader.style}>
                <h1 className={"entry__title"}>{formName}</h1>
                <Login componentsState={componentsState}
                       componentName={"Login"}
                       formType={loginType}/>
                <Login componentsState={componentsState}
                       componentName={"Login"}
                       formType={"Password"}/>
                <Button componentsState={componentsState}
                        componentName={buttonName}>
                    {buttonText}
                </Button>
            </form>
        )
    }
}

export default Entry;