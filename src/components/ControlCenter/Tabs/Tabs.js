import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/Tabs.scss';
import TabBtn from "./TabBtn";

class Tabs extends Component {

    render() {
        const { switchTab, currentTabName } = this.props;
        const btnNames = ["Style", "Export"];

        const tabButtons = btnNames.map((name, index) => {
            return <TabBtn btnName={name}
                           switchTab={switchTab}
                           currentTabName={currentTabName}
                           key={index}/>
        });

        return(
            <div className="tabs">
                {tabButtons}
            </div>
        )
    }


}

export default Tabs;
