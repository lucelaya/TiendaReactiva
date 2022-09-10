import React from "react";
import { Comic } from "./Comic";

export const MyComicsList = ({ comics }) => {
    const flex = { display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"};
    return (
        <section style={flex}>
            {comics.length ? (
                comics.map((comic) => <Comic key={comic.id} {...comic} />)
            ) : (
                <h2>Cargando...</h2>
            )}
        </section>
    );
};