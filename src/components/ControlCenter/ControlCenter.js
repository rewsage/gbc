import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlCenter.scss';
import Tabs from "./Tabs.js";
import StyleMenu from "./StyleMenu";
import ExportMenu from "./ExportMenu";

class ControlCenter extends Component {
    state = {
        currentTab: 'Style'
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.componentName !== this.props.componentName) {
            this.setState({currentTab: 'Style'})
        }
    }

    render() {
        const {getStyles, componentName, className, componentText, componentStyle} =  this.props;
        return(
            <div className="control-center">
                <Tabs currentTab={this.currentTab()}
                      switchTab={this.switchTab}/>
                {this.currentTab() === 'Style' && <StyleMenu getStyles={getStyles}
                                                             componentStyle={componentStyle}/>}
                {this.currentTab() === 'Export' && <ExportMenu componentName={componentName}
                                                               className={className}
                                                               componentText={componentText}/>}
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
