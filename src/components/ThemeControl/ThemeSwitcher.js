import React from 'react'
import ThemeContext from './ThemeContext'

function ThemeSwitcher() {
    return (
        <ThemeContext.Consumer>
            { ( {toggleTheme} ) => (
                   <div className="header__switcher">
                    <input type="checkbox"
                           className="header__toggle-btn"
                           onClick={toggleTheme}>
                    </input>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}


export default ThemeSwitcher