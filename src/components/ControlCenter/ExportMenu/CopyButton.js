import React from "react";
import "../../../assets/css/ControlCenter/Instruction.scss";

class CopyButton extends React.Component {
    state = {
        textButton: "Copy",
        isDisabled: false
    }

    render() {
        return (
            <button disabled={this.state.isDisabled}
                    onClick={this.copyToClipboard}
                    className={"instruction__button"}>
                {this.state.textButton}
            </button>
        );
    }

    copyToClipboard = () => {
        let text = this.props.text;
        let el = document.createElement('textarea');
        el.value = text;
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

export default CopyButton;