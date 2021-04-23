import React, {Component} from "react";
import "./Entry.css"
import StyleReader from "../../../../utils/StyleReader";
import Phone from "../Phone/Phone"

class Entry extends Component {
    render() {
        let styleReader = new StyleReader(this.props.className);
        const style = styleReader.style

        return (
            <form className={styleReader.userClassName + " entry"}
                  style={{background: style.background,
                          borderWidth:  style.borderWidth,
                          borderColor: style.borderColor,
                          borderRadius: style.borderRadius
                  }}>
                <h1 className={"entry__title"}>Вход</h1>
                <div className={"entry__group"}>
                    <input type="text"
                           className={"entry__input"}
                           style={{fontSize: style.fontSize,
                                   color: style.color,
                                   fontWeight: style.fontWeight
                           }}
                           placeholder=""/>
                    <label className={"entry__label"}>Email</label>
                </div>
                <div className={"entry__group"}>
                    <input type="password" className={"entry__input"} placeholder=""/>
                    <label className={"entry__label"}>Password</label>
                </div>
                <button className={"entry__button"}>Войти</button>
            </form>
        )
    }
}

export default Entry;