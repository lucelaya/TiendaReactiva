import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";
// import uuid from "react-uuid";

const CarrContext = createContext();

export const useCarrContext = () => useContext(CarrContext);

export const CarrContextProvider = ({ children }) => {
    const [compras, setCompras] = useState([]);

    const existe = (compra) => {
        return compras.some((buscada) => buscada.id === compra.id);
    };

    const agregarCompra = (compra) => {
        if (existe(compra)) {
            return Swal.fire("La compra ya existe en la lista");
        }

        // const id = uuid();
        // const nuevaCompra = { ...compra, id };
        const nuevaCompra = { ...compra};
        setCompras([...compras, nuevaCompra]);
        Swal.fire("Compra agregada");
    };

    //* Otra forma, es como mostro el profe Adrian
    //    const agregarCompra2 = (compra) => {
    //     const id = uuid();
    //     const nuevaCompra = { ...compra, id };
    //     setCompras((prev) => prev.concat(nuevaCompra));
    //   };

    const removerCompra = (compra) => {
        const removerCompra = compras.filter((buscada) => buscada.id !== compra.id);
        return setCompras(removerCompra);
    };

    const vaciarCompra = () => {
        setCompras([]);
    };

    // const pendientes = () => {
    //     const pendientes = compras.reduce(
    //         (acum, compra) => (compra.estado === false ? acum + 1 : acum),
    //         0
    //     );
    //     return pendientes;
    // };

    const actualizarEstado = (compra, estado) => {
        const copiaCompras = [...compras];

        const actualizarCompra = copiaCompras.map((actual) => {
            if (actual.id === compra.id) {
                return { ...actual, estado: estado ? false : true };
            } else {
                return actual;
            }
        });

        //!---------------------------------------------------------
        //! Esto no es necesario en la funcion, sino que lo use
        //! para mostrar como el estado original no habia cambiado
        const original = compras.find((p) => p.id === compra.id);

        console.log("compra original:", original);
        console.log("Compra compras original", compras);
        console.log("Compra compras actualizadas:", actualizarCompra);
        //! ---------------------------------------------------------

        setCompras(actualizarCompra);
    };

    return (
        <CarrContext.Provider
            value={{
                compras,
                existe,
                agregarCompra,
                removerCompra,
                vaciarCompra,
                // pendientes,
                actualizarEstado,
            }}
        >
            {children}
        </CarrContext.Provider>
    );
};