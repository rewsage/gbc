import React from "react";
import DisplayingText from "./DisplayingText";
import CopyButton from "./CopyButton";
import textBuilder from "../../../utils/textBuilder";

// компонент Instruction отвечает за вывод одного блока инструкции,
// то есть теста инструкции и кнопки "копировать"
class Instruction extends React.Component {
    render() {
        const {type, componentName, componentsState} = this.props;
        let text;

        if (type === "import") {
            // формируем инструкцию по импорту компанента
            text = `import ${componentName} from "path/to/Library/${componentName}/${componentName}";`;
        } else if (type === "tag") {
            // формируем инструкцию по вызову компонента
            text = textBuilder(componentName, componentsState);
            // заменяем все символы табуляции на 4 пробела,
            // так код выглядит лучше
            text = text.replaceAll(/\t/g, "    ");
        }

        return (
            <div className={"instruction"}>
                <DisplayingText text={text}/>
                <CopyButton text={text}/>
            </div>
        )
    }
}

export default Instruction;