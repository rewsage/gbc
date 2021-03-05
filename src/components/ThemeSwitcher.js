import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'

function ThemeSwitcher(props) {
    const svgIcon = <FontAwesomeIcon color="white" icon={faMoon} size="2x"/>

    return (
        <ThemeContextConsumer>
            {context => (
                <div>
                    <input type="checkbox"
                       className="header__toggle-btn"
                       onClick={context.toggleTheme}>
                    </input>
                </div>
            )}
        </ThemeContextConsumer>
    );
}


export default ThemeSwitcher