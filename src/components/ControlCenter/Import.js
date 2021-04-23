import React from "react";
import "../../assets/css/ControlCenter/Instruction.scss";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";

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
                <div className={"instruction__text"} id={"import"}>
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
        let wrongStr = document.getElementById("import").innerText;
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

export default Import;