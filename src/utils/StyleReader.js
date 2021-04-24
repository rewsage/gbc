class StyleReader {
    constructor(componentStyle) {
        this._componentStyle = componentStyle;
        this._style = {};
        this._userClassName = '';
        this._btn = 'Classic';
    }

    get className() {
        return this._buildClassName(this._componentStyle)
    }

    get userClassName() {
        this._decomposeComponentStyle();
        return this._userClassName;
    }

    get style() {
        this._decomposeComponentStyle();
        return this._style;
    }

    get button() {
        this._decomposeComponentStyle();
        return this._btn;
    }

    get url() {
        this._decomposeComponentStyle();
        return this._url;
    }

    _decomposeComponentStyle() {
        const properties = Object.keys(this._componentStyle);

        properties.forEach(property => {
            const value = this._componentStyle[property];
            if (value === '') return null;

            switch (property) {
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
                    this._btn = value;
                    break;
                case 'url':
                    this._url = property.split("-").slice(1).join("-");
                    break;
                case 'text':
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
                className += `${style}-${componentStyle[style].toLowerCase()} `
            }
        }

        return className.slice(0, -1);
    }
}

export default StyleReader;