import React from "react";
import StyleReader from "../../utils/StyleReader";
import DisplayText from "./DisplayText";
import CopyButton from "./CopyButton";
import textBuilder from "../../utils/textBuilder";

class Tag extends React.Component {
    render() {
        const {componentName, componentsState} = this.props;
        let text = textBuilder(componentName, componentsState);
        text = text.replaceAll(/\t/g, "    ");

        return (
            <div className={"instruction"}>
                <DisplayText text={text}/>
                <CopyButton text={text}/>
            </div>
        )
    }
}

export default Tag;