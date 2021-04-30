import React, { Component } from 'react';
import '../../../assets/css/ControlCenter/InputForms.scss';
import FormTemplate from './Forms/FormTemplate';
import ResetBtn from "./ResetBtn";

// StyleMenu отвечает за меню стилевых форм
class StyleMenu extends Component {
    render () {
        const {getStyles, resetStyles, componentStyle} = this.props;
        let formsList = [];

        // проходится по каждому свойству объекта стилей компонента,
        // на основе этих свойств формирует массив стилевых форм
        for (let styleType in componentStyle) {
            if ( componentStyle.hasOwnProperty(styleType) ) {
                formsList.push(<FormTemplate styleType={styleType}
                                             getStyles={getStyles}
                                             componentStyle={componentStyle}
                                             key={styleType}/>)
            }
        }

        // рендерит формы и кнопку сброса стилей
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
