import React, {Component} from 'react'
import './assets/css/Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from "@fortawesome/free-solid-svg-icons"
import ThemeSwitcher from "./ThemeSwitcher"

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isWhite: false,
        }
    }

    render() {
        const headerLogo = <FontAwesomeIcon color="white" icon={faCannabis} size="2x"/>
        let headerClassName = this.props.isWhite ? "header" : "test";

        return (
            <header className={headerClassName}>
                <div className="container">
                    <div className="header__inner">
                        {headerLogo}
                        <ThemeSwitcher action={this.action}/>
                    </div>
                </div>
            </header>
        )
    }

    action = (value) => {
        this.setState({
            isWhite: !this.state.isWhite,
        })
    }
}

export default Header