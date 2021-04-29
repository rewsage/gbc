import React from "react";
import DisplayingText from "./DisplayingText";
import CopyButton from "./CopyButton";
import textBuilder from "../../../utils/textBuilder";

class Tag extends React.Component {
    render() {
        const {componentName, componentsState} = this.props;
        let text = textBuilder(componentName, componentsState);
        text = text.replaceAll(/\t/g, "    ");

        return (
            <div className={"instruction"}>
                <DisplayingText text={text}/>
                <CopyButton text={text}/>
            </div>
        )
    }
}

export default Tag;