import StyleReader from "./StyleReader";

// функция textBuilder строит текст для вывода на сайте в разделе "Export"
export default function textBuilder(componentName, componentsState) {
    let text;

    if (componentName === "Card") {
        const componentStyle = componentsState[componentName];
        let componentText = componentStyle.text ? '\n\t' + componentStyle.text : '';

        const styleReader = new StyleReader(componentStyle);
        let className = styleReader.className;
        const Button = styleReader.button;

        let classText;
        const src = styleReader.url;
        
        // формируем отдельный пропс для src
        let additionalText = '';
        if (src !== undefined) {
            additionalText += ` src="${src}"`;
        }

        classText = isClassEmpty(className);

        const buttonCode = textBuilder(Button, componentsState);

        text = `<Card${classText}${additionalText}>${componentText}\n\t${buttonCode}\n</Card>`;
    } else if (componentName === 'Entry') {

        const componentStyle = componentsState[componentName];
        let componentText = componentStyle.text ? '\n\t' + componentStyle.text : '';
        const sync = componentsState["Entry"].sync;

        const styleReader = new StyleReader(componentStyle);
        let className = styleReader.className;
        const Button = styleReader.button;

        let classText;
        let typeForm = componentStyle.type || "Email";

        // удаляем ненужные параметры, которые будут передаваться как children
        className = className.replace(`btn-${Button}`, '').trim();
        className = className.replace(`type-${typeForm}`, '').trim();
        className = className.replace(`sync-${sync.toLocaleLowerCase()}`, '').trim();

        let Login = textBuilder(typeForm, componentsState);
        // второе поле в Entry всегда является паролем, поэтому оно отличается только типом
        let Pass = textBuilder("Password", componentsState);

        const buttonCode = textBuilder(Button, componentsState);

        classText = isClassEmpty(className);

        text = `<Entry${classText}>${componentText}\n\t${Login}\n\t${Pass}\n\t${buttonCode}\n</Entry>`;
    } else {
        let componentStyle = componentsState[componentName];

        const forms = ["Login", "Email", "Telephone", "Password"];

        // делаем синхранизацию стилей для форм из Entry
        if (forms.includes(componentName)) {
            const sync = componentsState["Entry"].sync;
            if (sync === "Login") {
                const typeForm = componentsState["Entry"].type || "Email";
                componentStyle = componentsState[typeForm];
            } else if (sync === "Pass") {
                componentStyle = componentsState["Password"];
            }
        }

        const styleReader = new StyleReader(componentStyle);
        let className = styleReader.className;
        let classText = isClassEmpty(className);

        // код простого компонента выводится в одну строчку
        let componentText = componentStyle.text;

        if (componentText === '' || componentText === undefined) {
            text = `<${componentName}${classText}/>`;
        } else {
            text = `<${componentName}${classText}>${componentText}</${componentName}>`;
        }
    }
    return text;
}

function isClassEmpty(className) {
    if (className === '') {
        return '';
    } else {
        return ` className="${className}"`;
    }
}