import React, {Component} from 'react'
import { fileIcon } from './InnerTree'

// FileBtn – компонент-кнопка, отображающая название файла на боковой панели
class FileBtn extends Component {
    state = {
        isFocused: false
    }

    // метод, вызывающийся перед рендером компонента
    // метод позволяет отследить изменение фокуса на компоненте
    static getDerivedStateFromProps(props, state) {
        const { userComponentName, file } = props;
        const fileName = file.slice(0, -3);
        const isEqual = userComponentName === fileName;

        // если кнопка в фокусе,
        // но ее название не совпадает с названием прожатой в данный момент кнопки,
        // то фокус нужно снять, и наоборот
        if (state.isFocused && !isEqual) {
            return { isFocused: false }
        } else if (!state.isFocused && isEqual) {
            return { isFocused: true }
        }

        // в ином случае оставить без изменений
        return null;
    }

    render() {
        const condition = this.isFocused() ? 'active' : 'disabled';

        return (
            <button className="tree-element__file"
                    onClick={ this.displayComponent }
                    onMouseOver={ this.eliminate }>
                <div className={`tree-element__highlighter tree-element__highlighter_${condition}`}/>
                    {fileIcon}
                <div className="tree-element__wrapper">
                    {this.props.file}
                </div>
            </button>
        )
    }

    // метод вызывает колбэк, отображающий компонент или прячущий его
    displayComponent = () => {
        const { callComponent, file } = this.props;
        const fileName = file.slice(0, -3);
        callComponent(fileName)

        // присвоить компоненту фокус, если он отображается, и наоборот
        this.setState({
            isFocused: !this.isFocused()
        })
    }

    // подсвечивает компонент при наведении мыши
    eliminate = () => {
        this.setState({
            isFocused: !this.isFocused()
        })
    }

    isFocused = () => {
        return this.state.isFocused;
    }
}

export default FileBtn;