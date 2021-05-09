import React, {Component} from "react";
import "./Entry.css"
import StyleReader from "../../../../utils/StyleReader";
import * as components from "../../../../utils/Hub";

class Entry extends Component {
    render() {
        const {componentsState} = this.props;
        const componentStyle = componentsState && componentsState["Entry"];
        const formType = componentStyle.type || "Email";
        const Authorization = components[formType];
        const Password = components["Password"];

        const styleReader = new StyleReader(componentStyle);
        const entryName = this.props.children || "Sign in";

        const buttonName = componentStyle.btn || 'Classic';
        const buttonText = componentsState[buttonName].text;
        const Button = components[buttonName];

        return (
            <form className={styleReader.userClassName + " entry"}
                  style={styleReader.style}>
                <h1 className={"entry__title"}>{entryName}</h1>
                <Authorization componentsState={componentsState} />
                <Password componentsState={componentsState} />
                <Button componentsState={componentsState}
                        componentName={buttonName}>
                    {buttonText}
                </Button>
            </form>
        )
    }
}

export default Entry;