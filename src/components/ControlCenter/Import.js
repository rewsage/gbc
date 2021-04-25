import React from "react";
import DisplayText from "./DisplayText";
import CopyButton from "./CopyButton";
import "../../assets/css/ControlCenter/Instruction.scss";

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
                <DisplayText text={text}/>
                <CopyButton text={text}/>
            </div>
        )
    }
}

export default Import;