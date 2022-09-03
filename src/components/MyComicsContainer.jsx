import React from "react";
import { useState, useEffect } from "react";
import comicsJson from "../myComics.json";

import { MyComicsList } from "./MyComicsList";

export const MyComicsContainer = () => {
    const [comics, setComics] = useState([]);
    useEffect(() => {
        const getComics = (data, time) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (data) {
                        resolve(data);
                    } else {
                        reject("Error");
                    }
                }, time);
            });

        getComics(comicsJson, 1500)
            .then((res) => {
                setComics(res);
            })
            .catch((err) => console.log(err, ": No hay comics"));
    }, []);

    return (
        <div>
            <MyComicsList comics={comics} />
        </div>
    );
};