import React from 'react'
import '../../assets/css/App-menu/Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"
import ThemeSwitcher from "../ThemeControl/ThemeSwitcher"

function Header(props) {
    const headerLogo = <FontAwesomeIcon className="header__logo" icon={faLaptopCode}/>

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    {headerLogo}
                    <p className="header__title">GBC</p>
                    <ThemeSwitcher className="header__switcher"/>
                </div>
            </div>
        </header>
    )
}

export default Header