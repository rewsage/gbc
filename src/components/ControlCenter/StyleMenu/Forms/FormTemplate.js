import React from 'react';
import DropdownForm from "./InputForms/DropdownForm";
import TextForm from "./InputForms/TextForm";
import NumberForm from "./InputForms/NumberForm";
import ColorForm from "./InputForms/ColorForm";

// FormTemplate - шаблон, в зависимости от пропсов которого, выбирается нужная форма
function FormTemplate(props) {
    // тип формы, колбэк, применяющий стили, и объект стилей текущего компонента
    const {styleType, getStyles, componentStyle} = props;
    let form;

    // по типу (стилю) формы выбирает нужную из списка
    switch (styleType) {
        // размер шрифта (font-size)
        case 'fs':
            form = <NumberForm label={"Font Size"}
                               styleType={'fs'}
                               getStyles={getStyles}
                               componentStyle={componentStyle}/>
            break;
        // ширина границы (border-width)
        case 'bw':
            form = <NumberForm label={"Border Width"}
                               styleType={'bw'}
                               getStyles={getStyles}
                               componentStyle={componentStyle}/>
            break;
        // цвет фона (background)
        case 'bg':
            form = <ColorForm label={"Background"}
                              styleType={'bg'}
                              getStyles={getStyles}
                              componentStyle={componentStyle}/>
            break;
        // цвет шрифта (color)
        case 'cl':
            form = <ColorForm label={"Color"}
                              styleType={'cl'}
                              getStyles={getStyles}
                              componentStyle={componentStyle}/>
            break;
        // цвет границы (border-color)
        case 'bc':
            form = <ColorForm label={"Border Color"}
                              styleType={'bc'}
                              getStyles={getStyles}
                              componentStyle={componentStyle}/>
            break;
        // толщина шрифта (font-weight)
        case 'fw':
            const fontWeight = ["Light", "Regular", "Bold"];
            form = <DropdownForm label={"Font weight"}
                                 elements={fontWeight}
                                 styleType={'fw'}
                                 getStyles={getStyles}
                                 componentStyle={componentStyle}/>
            break;
        // ширина компонента (width)
        case 'wd':
            form = <NumberForm label={"Width"}
                               styleType={'wd'}
                               getStyles={getStyles}
                               componentStyle={componentStyle}/>
            break;
        // закругление краев (border-radius)
        case 'br':
            form = <NumberForm label={"Border Radius"}
                               styleType={'br'}
                               getStyles={getStyles}
                               componentStyle={componentStyle}/>
            break;
        // тип ввода формы
        case 'type':
            const types = ["Email", "Telephone", "Login"];
            form = <DropdownForm label={"Type"}
                                 elements={types}
                                 styleType={'type'}
                                 getStyles={getStyles}
                                 componentStyle={componentStyle}/>
            break;
        // выбор кнокпи компонента
        case 'btn':
            const buttons = ["Classic", "Waves"];
            form = <DropdownForm label={"Button"}
                                 elements={buttons}
                                 styleType={'btn'}
                                 getStyles={getStyles}
                                 componentStyle={componentStyle}/>
            break;
        // выбор синхранизации стилей форм
        case 'sync':
            const sync = ["None", "Login", "Pass"];
            form = <DropdownForm label={"Synchronize"}
                                 elements={sync}
                                 styleType={'sync'}
                                 getStyles={getStyles}
                                 componentStyle={componentStyle}/>
            break;
        // текстовое поле компонента
        case 'text':
            form = <TextForm label={"Text"}
                             styleType={'text'}
                             getStyles={getStyles}
                             componentStyle={componentStyle}/>
            break;
        // адрес картинки
        case 'url':
            form = <TextForm label={"Image URL"}
                             styleType={'url'}
                             getStyles={getStyles}
                             componentStyle={componentStyle}/>
        }

    return (
        form
    );
}

export default FormTemplate;