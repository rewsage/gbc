import React from "react";

class StyleReader {
    constructor(className) {
        this.className = className;
        this._userClassName = '';
        this._style = {};
        this.currentButton = 'Classic';
        this.url = '';
        this.type = "Email"
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
        return this.currentButton;
    }

    get img() {
        this._decomposeClassName();
        return this.url;
    }

    get typeForm() {
        this._decomposeClassName();
        return this.type;
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
                case 'br':
                    this._style.borderRadius = value + 'px';
                    break;
                case 'bt':
                    this.currentButton = value;
                    break;
                case 'url':
                    this.url = property.split("-").slice(1).join("-");
                    break;
                case 'type':
                    this.type = value;
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