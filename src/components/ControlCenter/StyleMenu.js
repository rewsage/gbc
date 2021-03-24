import React, { Component } from 'react';
import '../../assets/css/ControlCenter/ControlMenu.scss';
import DropdownMenu from "./DropdownMenu";
import InputForm from "./InputForm";

class StyleMenu extends Component {
    constructor(props) {
        super(props);

        this.stylesObj = {
            sz: '',
            // fontWeight: '',
            bg: '',
            cl: '',
            text: '',
        }

        this.state = {

        }
    }

    render () {
        const fontSize = ["Small", "Medium", "Large"]
        // const fontWeight = ["Light", "Regular", "Bold"]

        return (
            <div className="control-menu">
                <DropdownMenu label={"Font size"}
                              elements={fontSize}
                              styleType={'sz'}
                              returnValue={this.getStyle}/>
                {/*<DropdownMenu label={"Font weight"}*/}
                {/*              elements={fontWeight}*/}
                {/*              styleType={'fontWeight'}*/}
                {/*              returnValue={this.getStyle}/>*/}
                <InputForm label={"Background Color"}
                           styleType={'bg'}
                           returnValue={this.getStyle}/>
                <InputForm label={"Color"}
                           styleType={'cl'}
                           returnValue={this.getStyle}/>
                <InputForm label={"Text"}
                           styleType={'text'}
                           returnValue={this.getStyle}/>
            </div>
        )
    }

    getStyle = (styleType, value) => {
        const  {returnStyles} = this.props;

        this.setState(state => {
           state[styleType] = value;
        }, () => {
           returnStyles(this.state);
        });
    }
}

export default StyleMenu;
