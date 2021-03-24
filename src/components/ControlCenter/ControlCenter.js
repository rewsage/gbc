import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlCenter.scss';
import Tabs from "./Tabs.js";
import StyleMenu from "./StyleMenu";
import ExportMenu from "./ExportMenu";

class ControlCenter extends Component {
    state = {
        currentTab: 'Style',
    }

    render() {
        const {returnStyles} =  this.props;

        return(
            <div className="control-center">
                <Tabs currentTab={this.currentTab()}
                      switchTab={this.switchTab}/>
                {this.currentTab() === 'Style' && <StyleMenu returnStyles={returnStyles}/>}
                {this.currentTab() === 'Export' && <ExportMenu/>}
            </div>
        )
    }

    switchTab = (tabName) => {
        this.setState({
            currentTab: tabName,
        })
    }

    currentTab = () => {
        return this.state.currentTab;
    }
}

export default ControlCenter;
