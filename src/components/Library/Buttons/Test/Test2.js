import React, {Component} from 'react';
import "./Test2.scss"

class Test2 extends Component {
    render() {
        const colors = {background: this.props.background,
                        color: this.props.color}
        const text = this.props.text;
        const size = this.props.size;
        if (size === "small") {
            return (<button className={`${this.props.classname} button button__small`} style={colors}>{text}</button>);
        } else if (size === "medium") {
            return (<button className={`${this.props.classname} button`} style={colors}>{text}</button>);
        } else {
            return (<button className={`${this.props.classname} button button__large`} style={colors}>{text}</button>);
        }
    }
}

export default Test2;