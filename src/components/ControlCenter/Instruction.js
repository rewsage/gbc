import React from "react";
import "../../assets/css/ControlCenter/Instruction.scss"
import Highlight from "react-highlight";


class Instruction extends React.Component {
    state = {
        textButton: "Copy",
        isDisabled: false
    }

    render() {
        let text = (this.props.id === "html") ?
            <p dangerouslySetInnerHTML={{__html: this.props.text}} /> :
            this.props.text;
        return (
            <div className={"instruction"}>
                <p className={"instruction__text"} id={this.props.id}>
                    <Highlight className={"highlight"} language="javascript, html">
                        {text}
                    </Highlight>
                </p>
                <button disabled={this.state.isDisabled} onClick={this.copyToClipboard} className={"instruction__button"}>
                    {this.state.textButton}
                </button>
            </div>
        )
    }
    copyToClipboard = () => {
        let str = document.getElementById(this.props.id).innerText;
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

export default Instruction;