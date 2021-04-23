import React, { Component } from 'react';
import '../../assets/css/ControlCenter/InputForms.scss';
import FormTemplate from './FormTemplate';

class StyleMenu extends Component {
    render () {
        const {getStyles, componentStyle} = this.props;
        let formsList = [];

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
                {formsList}
            </div>
        )
    }
}

export default StyleMenu;
