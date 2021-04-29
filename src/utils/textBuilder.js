import StyleReader from "./StyleReader";

// функция textBuilder строит текст для вывода на сайте в разделе "Export"
export default function textBuilder(componentName, componentsState) {
    let text;

    const componentStyle = componentsState[componentName];
    let componentText = componentStyle.text ? '\n\t' + componentStyle.text : '';

    const styleReader = new StyleReader(componentStyle);
    let className = styleReader.className;
    const Button = styleReader.button;

    let classText;

    if (componentName === "Card") {
        const src = styleReader.img;
        // удаляем ненужные параметры, которые будут передаваться отдельным пропсом или как children
        className = className.replace(`btn-${Button}`, '').trim();
        className = className.replace(`url-${src}`, '').trim();

        // формируем отдельный пропс для src
        let additionalText = '';
        if (src !== '') {
            additionalText += ` src="${src}"`;
        }

        classText = isClassEmpty(className);

        const buttonCode = textBuilder(Button, componentsState);

        text = `<Card${classText}${additionalText}>${componentText}\n\t${buttonCode}\n</Card>`;
    } else if (componentName === 'Entry') {
        let typeForm = componentsState["Login"].type;
        // удаляем ненужные параметры, которые будут передаваться как children
        className = className.replace(`btn-${Button}`, '').trim();

        let Login = textBuilder('Login', componentsState);
        // второе поле в Entry всегда является паролем, поэтому оно отличается только типом
        let Pass = Login.replace(`type="${typeForm}"`, `type="Password"`);
        const buttonCode = textBuilder(Button, componentsState);

        classText = isClassEmpty(className);

        text = `<Entry${classText}>${componentText}\n\t${Login}\n\t${Pass}\n\t${buttonCode}\n</Entry>`;
    } else {
        let additionalText = '';
        if (componentName === 'Login') {
            let typeForm = componentStyle.type;
            // удаляем ненужные параметры, которые будут передаваться отдельным пропсом
            className = className.replace(`type-${typeForm}`, '').trim();

            // формируем отдельный пропс для type
            if (typeForm !== '') {
                additionalText += ` type="${typeForm}"`;
            }
        }
        classText = isClassEmpty(className);
        // изменяем componentText, чтобы код кнопки не переносился на новую строку
        // иначе в составных компонентах код будет выводиться некоректно
        componentText = componentStyle.text;

        if (componentText === '' || componentText === undefined) {
            text = `<${componentName}${classText}${additionalText}/>`;
        } else {
            text = `<${componentName}${classText}${additionalText}>${componentText}</${componentName}>`;
        }
    }
    return text;
}

function isClassEmpty(className) {
    if (className === '') {
        return '';
    } else {
        return ` classname="${className}"`;
    }
}