import React from "react";
import { useCarrContext } from "../../context/CarrContext";
import { Comic } from "../Comic";
export const Carrito = () => {
    const { compras, removerCompra, actualizarEstado, vaciarCompra } =
        useCarrContext();

    return (
        <div>
            <h1>Carrito</h1>
            {compras.length ? (
                compras.map((compra) => (
                    <>
                        <Comic key={compra.id} {...compra} />
                        <button className="button" onClick={() => removerCompra(compra)}>
                            Remover compra
                        </button>

                        <button
                            className="button"
                            onClick={() => actualizarEstado(compra, compra.estado)}
                        >
                            Cambiar unidades
                        </button>
                    </>
                ))
            ) : (
                <h3 style={{ margin: "5rem" }}>No hay compras...</h3>
            )}
            {compras.length > 0 && (
                <>
                    <button className="button" onClick={vaciarCompra}>
                        Vaciar lista de compras
                    </button>
                </>
            )}
        </div>
    );
};