import StyleReader from "./StyleReader";

export default function textBuilder(componentName, componentsState) {
    const componentStyle = componentsState[componentName];
    const styleReaderCard = new StyleReader(componentStyle);
    let className = styleReaderCard.className;
    let text;

    const Button = styleReaderCard.button;
    const styleReaderButton = new StyleReader(componentsState[Button]);
    let classButton = styleReaderButton.className;
    let buttonText = componentsState[Button].text;
    let buttonTag

    if (buttonText === '' || buttonText === undefined) {
        buttonTag = `<${Button} className="${classButton}"/>`;
    } else {
        buttonTag = `<${Button} className="${classButton}">\n\t\t${buttonText}\n\t</${Button}>`;
    }

    if (componentName === "Card") {
        const componentText = componentStyle.text ? '\n\t' + componentStyle.text : '';
        const src = styleReaderCard.img;
        className = className.replace(`btn-${Button}`, '').trim();
        className = className.replace(`url-${src}`, '').trim();

        let additionalText = '';
        if (src !== '') {
            additionalText += `src="${src}"`;
        }

        return text = `<Card className="${className}" ${additionalText}>${componentText}\n\t${buttonTag}\n</Card>`;
    } else if (componentName === 'Entry') {
        const componentText = componentStyle.text ? '\n\t' + componentStyle.text : '';
        let typeForm = componentsState["Login"].type;
        className = className.replace(`btn-${Button}`, '').trim();

        let Login = textBuilder('Login', componentsState);
        let Pass = Login.replace(`type="${typeForm}"`, `type="password"`)
        return text = `<Entry className="${className}">${componentText}\n\t${Login}\n\t${Pass}\n\t${buttonTag}\n</Entry>`;
    } else {
        let additionalText = '';
        if (componentName === 'Login') {
            let typeForm = componentStyle.type;
            className = className.replace(`type-${typeForm}`, '').trim();

            if (typeForm !== '') {
                additionalText += `type="${typeForm}"`;
            }
        }
        const componentText = componentStyle.text;

        if (componentText === '' || componentText === undefined) {
            return text = `<${componentName} className="${className}" ${additionalText}/>`;
        } else {
            return text = `<${componentName} className="${className}" ${additionalText}>${componentText}</${componentName}>`;
        }
    }
}