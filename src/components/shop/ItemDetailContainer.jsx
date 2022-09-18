import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import ItemDetail from "./ItemDetail"
// import products from "./productsData"
import products from "../../myComics.json";
import { Comic } from "../Comic";
import { useCarrContext } from "../../context/CarrContext";

    const ItemDetailContainer = () => {

        const { agregarCompra } = useCarrContext();

        // Funcion para el formulario
        const onSubmit = (e) => {
            e.preventDefault();
            agregarCompra({...item});
        };

        const [item, setItem] = useState({})
        const { slug } = useParams()

        useEffect(() => {
            getItem().then(data => {
                // console.log(item.title)
                if (data) {
                    setItem(data)
                }
            })
        }, [])

        // getItem con Promise
        const getItem = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(products.find(p => p.slug === slug))
                }, 1000);
            })
        }

        return (
            // <Comic item={item} />
            <>
                <form onSubmit={onSubmit}>
                    <Comic key={item.id} {...item} />
                    <input className="button" type="submit" value="Comprar" />
                </form>
            </>
        )
    }
    export default ItemDetailContainer