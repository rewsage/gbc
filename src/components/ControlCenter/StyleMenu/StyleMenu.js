import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/InputForms.scss';
import FormTemplate from './Forms/FormTemplate';
import ResetBtn from "./ResetBtn";

class StyleMenu extends Component {
    render () {
        const {getStyles, resetStyles, componentStyle} = this.props;
        const formsList = [];

        for (let styleType in componentStyle) {
            if ( componentStyle.hasOwnProperty(styleType) ) {
                formsList.push(<FormTemplate styleType={styleType}
                                             getStyles={getStyles}
                                             componentStyle={componentStyle}
                                             key={styleType}/>)
            }
        }

        return (
            <div className="control-menu">
                <div className="control-menu__inner">
                    {formsList}
                </div>
                <ResetBtn resetStyles={resetStyles}/>
            </div>
        )
    }
}

export default StyleMenu;
