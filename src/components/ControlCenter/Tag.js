import React from "react";
import "../../assets/css/ControlCenter/Instruction.scss";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";
import StyleReader from "../../utils/StyleReader";

class Tag extends React.Component {
    state = {
        textButton: "Copy",
        isDisabled: false
    }

    render() {
        const {componentName, componentsState} = this.props;
        const componentStyle = componentsState[componentName];
        const styleReaderCard = new StyleReader(componentStyle);
        let className = styleReaderCard.className;
        let text;
        if (componentName === "Card") {
            const componentText = componentStyle.text ? '\n\t' + componentStyle.text : '';
            let Button = styleReaderCard.button;
            className = className.replace(`btn-${Button}`, '')
            const styleReaderButton = new StyleReader(componentsState[Button]);
            let classButton = styleReaderButton.className;
            let buttonText = componentsState[Button].text;
            let buttonTag

            if (buttonText === '' || buttonText === undefined) {
                buttonTag = `<${Button} className="${classButton}"/>`;
            } else {
                buttonTag = `<${Button} className="${classButton}">\n\t\t${buttonText}\n\t</${Button}>`;
            }

            text = `<${componentName} className="${className}">${componentText}\n\t${buttonTag}\n</${componentName}>`;
        } else {
            const componentText = componentStyle.text;

            if (componentText === '' || componentText === undefined) {
                text = `<${componentName} className="${className}"/>`;
            } else {
                text = `<${componentName} className="${className}">${componentText}</${componentName}>`;
            }
        }

        text = text.replaceAll(/\t/g, "    ");

        return (
            <div className={"instruction"}>
                <div className={"instruction__text"} id={"tag"}>
                    <Highlight {...defaultProps} code={text} language="jsx" theme={theme}>
                        {({ style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={"highlight"} style={style}>
                                {tokens.map((line, i) => (
                                    <div {...getLineProps({ line, key: i })}>
                                        {line.map((token, key) => (
                                            <span {...getTokenProps({ token, key })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </div>
                <button disabled={this.state.isDisabled}
                        onClick={this.copyToClipboard}
                        className={"instruction__button"}>
                    {this.state.textButton}
                </button>
            </div>
        )
    }

    copyToClipboard = () => {
        let wrongStr = document.getElementById("tag").innerText;
        let str = wrongStr.replaceAll(/\n/g, '');
        let el = document.createElement('textarea');

        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        this.setState({
            textButton: "Copied",
            isDisabled: true
        })

        setTimeout(this.backCopy, 1000)
    }

    backCopy = () => {
        this.setState({
            textButton: "Copy",
            isDisabled: false
        })
    }
}

export default Tag;