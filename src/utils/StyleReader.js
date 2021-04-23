class StyleReader {
    constructor(componentStyle) {
        this._className = this._buildClassName(componentStyle);
        this._userClassName = '';
        this._style = {};
        this._currentButton = 'Classic';
        this._url = '';
    }

    get className() {
        return this._className;
    }

    get userClassName() {
        this._decomposeClassName();
        return this._userClassName;
    }

    get style() {
        this._decomposeClassName();
        return this._style;
    }

    get button() {
        this._decomposeClassName();
        return this._currentButton;
    }

    get img() {
        this._decomposeClassName();
        return this._url;
    }

    _decomposeClassName() {
        const properties = this._className.split(' ');

        properties.forEach(property => {
            let propertyName = property.split("-")[0];
            let value = property.split("-")[1];

            switch (propertyName) {
                case 'fs':
                    this._style.fontSize = value + 'px';
                    break;
                case 'fw':
                    this._style.fontWeight = this._handleFwProperty(value);
                    break;
                case 'bg':
                    this._style.background = value;
                    break;
                case 'cl':
                    this._style.color = value;
                    break;
                case 'bc':
                    this._style.borderColor = value;
                    break;
                case 'bw':
                    this._style.borderWidth = value + 'px';
                    break;
                case 'btn':
                    this._currentButton = value;
                    break;
                case 'url':
                    this._url = property.split("-").slice(1).join("-");
                    break;
                default:
                    this._userClassName += property;
            }

            if (this._userClassName !== '') this._userClassName += ' ';
        });
    }

    _handleFwProperty(value) {
        switch (value.toLowerCase()) {
            case 'light':
                return '400';
            case 'bold':
                return '600';
            default:
                return '500';
        }
    }

    _buildClassName(componentStyle) {
        let className = '';

        for (let style in componentStyle) {
            if (
                style !== 'text' &&
                componentStyle.hasOwnProperty(style) &&
                componentStyle[style] !== ''
            ) {
                className += `${style}-${componentStyle[style]} `
            }
        }

        return className.slice(0, -1);
    }
}

export default StyleReader;