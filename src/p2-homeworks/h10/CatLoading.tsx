import cat from "./unnamed.gif";
import React from "react";
import s from "./cat.module.css"


let Cat = () => {
    return <div className={s.content}>
        <img src={cat}/>
    </div>
}
export default Cat