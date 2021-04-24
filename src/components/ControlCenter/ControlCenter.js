import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlCenter.scss';
import Tabs from "./Tabs/Tabs.js";
import StyleMenu from "./StyleMenu/StyleMenu";
import ExportMenu from "./ExportMenu/ExportMenu";

class ControlCenter extends Component {
    state = {
        currentTabName: 'Style'
    }

    render() {
        const {getStyles, resetStyles, componentName, componentStyle } =  this.props;
        let currentTab;

        switch ( this.currentTabName() ) {
            case ('Style'):
                currentTab = <StyleMenu getStyles={getStyles}
                                        resetStyles={resetStyles}
                                        componentStyle={componentStyle}/>
                break;
            case ('Export'): {
                currentTab = <ExportMenu componentName={componentName}
                                         componentStyle={componentStyle}/>
                break;
            }
        }

        return(
            <div className="control-center">
                <Tabs currentTabName={this.currentTabName()}
                      switchTab={this.switchTab}/>
                {currentTab}
            </div>
        )
    }

    switchTab = (currentTabName) => {
        this.setState({
            currentTabName: currentTabName,
        })
    }

    currentTabName = () => {
        return this.state.currentTabName;
    }
}

export default ControlCenter;
