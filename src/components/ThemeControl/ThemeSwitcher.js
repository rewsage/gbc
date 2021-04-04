import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

function ThemeSwitcher() {
    return (
        <ThemeContextConsumer>
            {context => (
                   <div className="header__switcher">
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