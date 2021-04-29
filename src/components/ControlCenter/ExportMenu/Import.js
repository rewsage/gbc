import React from "react";
import DisplayingText from "./DisplayingText";
import CopyButton from "./CopyButton";
import "../../../assets/css/ControlCenter/Instruction.scss";

class Import extends React.Component {
    state = {
        textButton: "Copy",
        isDisabled: false
    }

    render() {
        const componentName = this.props.componentName;
        let text = `import ${componentName} from "path/to/Library/${componentName}/${componentName}";`;

        return (
            <div className={"instruction"}>
                <DisplayingText text={text}/>
                <CopyButton text={text}/>
            </div>
        )
    }
}

export default Import;