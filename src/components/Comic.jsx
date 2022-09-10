import React from "react";
import { useState } from "react";
import ItemCounter from "./ItemCounter";

export const Comic = ({ title, img, price, stock }) => {

    const [styleRead, setStyleRead] = useState(false);
    const [read, setRead] = useState(false);
    console.log(img)

    function readComics() {
        setStyleRead(styleRead ? false : true);
        setRead(read ? false : true);
    }

    return (
        <article>
            <h3>Titulo: {title}</h3>
            <h3>Precio: ${price}</h3>
            <h3>Stock: {stock}</h3>

            <img src={"../."+img} alt="" style={{ width: "15rem" }} />

            <h4 style={{ color: styleRead ? "green" : "red", cursor: "pointer" }}
                onClick={readComics}>
                Toca aquí si has leido este Comic
            </h4>

            <h4 style={{ opacity: read ? 1 : 0 }}>
                CLARO QUE SI!
            </h4>

            <ItemCounter stock={stock}/>

        </article>
    )
};