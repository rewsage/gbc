import React, {Component} from 'react'

class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        }
    }

    render() {
        return (
            <button className="header__btn"
                    onClick={this.handleClick}>
                <span>{this.isActive() ? 'to dark': 'to light'}</span>
            </button>
        )
    }

    isActive = () => this.state.active

    handleClick = () => {
        // this.setState({
        //     active: !this.isActive(),
        // })
        console.log(this.state);
        this.props.action();
    }
}

export default ThemeSwitcher