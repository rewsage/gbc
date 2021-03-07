import React from 'react'
import './assets/css/Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import ThemeSwitcher from "./ThemeSwitcher"
import {ThemeContextConsumer} from "./ThemeContext"

function Header(props) {
    const headerLogo = <FontAwesomeIcon color="white" icon={faLightbulb} size="2x"/>

    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`header header_${context.theme}`}>
                    <div className="container">
                        <div className="header__inner">
                            {headerLogo}
                            <p className="header__title">GBC</p>
                            <ThemeSwitcher className="header__switcher"/>
                        </div>
                    </div>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header