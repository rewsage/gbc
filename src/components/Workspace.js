import React from 'react';
import '../assets/css/Workspace.scss'
import * as components from "../utils/Hub"
import ControlCenter from "./ControlCenter/ControlCenter";
import ThemeContext from "./ThemeControl/ThemeContext";

// один из ключевых компонентов
// Workspace отображает рабочее пользовательское пространство в правой части приложения
class Workspace extends React.Component {
    // состояние хранит стили всех компонентов в конкретный момент времени
    state = {
        "Classic": { text: '', fs: '', bg: '', cl: '', fw: '', br: '' },
        "Waves": { text: '', fs: '', bg: '', bc: '', cl: '', fw: '' },
        "Phone": { fs: '', bg: '', cl: '', fw: '', bw: '', bc: '', br: '' },
        "Login": { text: '', fs: '', cl: '', fw: '', bw: '', bc: '' },
        "Password": { text: '', fs: '', cl: '', fw: '', bw: '', bc: '' },
        "Email": { text: '', fs: '', cl: '', fw: '', bw: '', bc: '' },
        "Telephone": { text: '', fs: '', cl: '', fw: '', bw: '', bc: '' },
        "Entry": { text: '', bg: '', bw: '', bc: '', br: '', btn: '', type: '', sync: '' },
        "Card": { text: '', url: '', fs: '', bg: '', cl: '', fw: '', bw: '', bc: '', btn: '', wd: '' },
    }

    render() {
        const {userComponentName} = this.props;
        const themeContext = this.context.theme;
        const componentText = userComponentName && this.state[userComponentName].text;
        // исходя из переданного пропсом имени выбирается текущий компонент для отображения
        const Component = components[userComponentName];

        // проверка на то, открыт ли компонент
        const currentComponent = userComponentName && <Component componentsState={this.state}>
                                                          {componentText}
                                                      </Component>

        // аналогично
        const currentMenu = userComponentName && <ControlCenter getStyles={this.getStyles}
                                                                resetStyles={this.resetStyles}
                                                                componentsState={this.state}
                                                                componentName={userComponentName}/>;

        return (
            <div className={`workspace workspace_${themeContext}`} key={userComponentName}>
                <div className="workspace__inner">
                    <div className="workspace__content">
                        {currentComponent}
                    </div>
                    {currentMenu}
                </div>
            </div>
        )
    }

    // метод получает стили из форм и на основе полученных данных
    // обновляет состояние стилей компонета
    getStyles = (styleType, value) => {
        const {userComponentName} = this.props;
        const updatedObj = this.state[userComponentName];
        updatedObj[styleType] = value

        this.setState({
            [userComponentName]: updatedObj,
        })
    }

    // метод сбрасывает стили всех компонетов
    resetStyles = () => {
        const {userComponentName} = this.props;
        const resetObj = this.state[userComponentName];
        const properties =  Object.keys(resetObj);

        properties.forEach(property => {
           resetObj[property] = '';
        });

        this.setState({
            [userComponentName]: resetObj,
        })
    }

    // передача контекста текущей UI-темы
    static contextType = ThemeContext;
}

export default Workspace;