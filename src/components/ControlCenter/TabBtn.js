import React, { Component } from 'react';

class TabBtn extends Component {
    state = {
        isActive: false,
    }

    render() {
        const {btnName, currentTab} = this.props;
        const activeMarker = btnName === currentTab ? 'active' : 'disabled';

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
}


export default TabBtn;
