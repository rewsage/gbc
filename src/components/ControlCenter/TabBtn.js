import React, { Component } from 'react';

class TabBtn extends Component {
    state = {
        isActive: false,
    }

    render() {
        const {btnName, currentTab} = this.props;
        const activeMarker = this.isActive() ? 'active' : 'disabled';

        if (!this.isActive() && (btnName === currentTab)) {
            this.setState({
                isActive: true,
            })
        } else if (this.isActive() && (btnName !== currentTab)) {
            this.setState({
                isActive: false,
            })
        }

        return(
            <div className="tabs__wrapper">
                <button className="tabs__btn"
                        onClick={this.pressBtn}>
                    {btnName}
                </button>
                <div className={`tabs__underline tabs__underline_${activeMarker}`}/>
            </div>
        )
    }

    pressBtn = () => {
        const { switchTab, btnName } = this.props;
        switchTab(btnName);
    }

    isActive = () => {
        return this.state.isActive;
    }
}


export default TabBtn;
