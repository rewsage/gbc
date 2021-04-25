import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/Tabs.scss';
import TabBtn from "./TabBtn";
import ThemeContext from "../../ThemeControl/ThemeContext";

class Tabs extends Component {

    render() {
        const { switchTab, currentTabName } = this.props;
        const themeContext = this.context.theme;
        const btnNames = ["Style", "Export"];

        const tabButtons = btnNames.map((name, index) => {
            return <TabBtn btnName={name}
                           switchTab={switchTab}
                           currentTabName={currentTabName}
                           key={index}/>
        });

        return(
            <div className={`tabs tabs_${themeContext}`}>
                {tabButtons}
            </div>
        )
    }

    static contextType = ThemeContext;
}

export default Tabs;
