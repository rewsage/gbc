import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/ResetBtn.scss'
import { faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ResetBtn extends Component {
    state = {
        isActive: false,
    }

    render () {
        const condition = this.isActive() ? 'active' : 'false';
        const trashIcon = <FontAwesomeIcon className={`reset-btn__trash-icon`} icon={faTrashAlt}/>
        const checkIcon = <FontAwesomeIcon className={`reset-btn__check-icon`} icon={faCheck}/>

        return (
            <button className={`reset-btn reset-btn_${condition}`}
                    onClick={this.handleClick}>
                <span>RESET</span>
                <div className="reset-btn__wrapper">
                    {trashIcon}
                    {checkIcon}
                </div>
            </button>
        )
    }

    handleClick = (e) => {
        e.preventDefault();
        if ( this.isActive() ) return null;
        const { resetStyles } = this.props;
        resetStyles()

        this.setState({
            isActive: true
        })

        setTimeout(() => {
            this.setState({
                isActive: false,
            })
        }, 2000);
    }

    isActive = () => {
        return this.state.isActive
    }
}

export default ResetBtn;
