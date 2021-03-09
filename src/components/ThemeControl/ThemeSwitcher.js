import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

function ThemeSwitcher(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                   <div className={props.className}>
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