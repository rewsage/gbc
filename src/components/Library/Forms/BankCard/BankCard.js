import React, {Component} from "react";
import "./BankCard.css";
import StyleReader from "../../../../utils/StyleReader";
import Data from "../Data/Data";
import CardInfo from "card-info";


class BankCard extends Component {
    state = {
        bankName: 'Lenix Bank',
        bankLogo: '',
        brandLogo: '',
        background: '',
        textColor: '',
        codeName: 'CVV'
    }

    render() {
        const {componentsState} = this.props;
        const componentStyle = componentsState && componentsState["BankCard"];
        const styleReader = new StyleReader(componentStyle);

        return (
            <div className={"bankCard"} style={styleReader.style}>
                <h2 className={"bankCard__bankName"}>{this.state.bankName}</h2>
                <Data componentsState={componentsState}
                      className={"bankCard__number"}
                      id={"card-number"}
                      onChange={this.handleChange}
                      formMask={"9999-9999-9999-9999"}
                      formPlaceholder={"Card number"} />
                <div className={"bankCard__lower"}>
                    <div className={"bankCard__period"}>
                        <Data componentsState={componentsState}
                              className={"bankCard__month"}
                              formMask={"99"}
                              formPlaceholder={"MM"}/>
                        <p className={"bankCard__splitter"}>/</p>
                        <Data componentsState={componentsState}
                              className={"bankCard__year"}
                              formMask={"99"}
                              formPlaceholder={"YY"}/>
                    </div>
                    <Data componentsState={componentsState}
                          className={"bankCard__code"}
                          formMask={"999"}
                          formPlaceholder={this.state.codeName}/>
                </div>
            </div>
        );
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps !== this.props) {
    //         const {componentsState} = this.props;
    //         const componentStyle = componentsState && componentsState["BankCard"];
    //
    //         const bankName = componentStyle["text"] || "Lenix Bank";
    //         const background = componentStyle["bg"] || "#EFF2EE";
    //         const textColor = componentStyle["cl"] || "#222222";
    //
    //         this.setState(
    //             {
    //                 bankName: bankName,
    //                 background: background,
    //                 textColor: textColor,
    //             }
    //         )
    //     }
    // }

    handleChange = () => {
        let cardNum = document.querySelector("#card-number").value.trim();
        cardNum = cardNum.replace(/[-_]+/g, '');
        if (cardNum.length > 5) {
            let cardInfo = new CardInfo(cardNum, {
                banksLogosPath: '/node_modules/card-info/dist/banks-logos/',
                brandsLogosPath: '/node_modules/card-info/dist/brands-logos/'
            });

            console.log(cardInfo)

            if (cardInfo.bankName !== null) {
                this.setState({
                    bankName: cardInfo.bankName,
                    bankLogo: cardInfo.bankLogo,
                    brandLogo: cardInfo.brandLogo,
                    background: cardInfo.backgroundGradient,
                    textColor: cardInfo.textColor,
                    codeName: cardInfo.codeName,
                });
            }
        }
    }
}

export default BankCard;