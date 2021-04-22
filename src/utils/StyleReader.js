class StyleReader {
    constructor(className) {
        this.className = className;
        this._userClassName = '';
        this._style = {}
    }

    get userClassName() {
        this._decomposeClassName();
        return this._userClassName;
    }

    get style() {
        this._decomposeClassName();
        return this._style;
    }

    _decomposeClassName() {
        const properties = this.className.split(' ');

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
}

export default StyleReader;