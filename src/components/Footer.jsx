import { Link } from "react-router-dom"

export const DarkmodeButton = () => {
    return (
        <input type="checkbox" class="toggle" />
    )
}

const Footer = () => {
    return (
        <div className="m-5">
            <li><Link to={'/'}>Mi app</Link></li>
            <li><Link to={'/shop'}>Mi Tienda</Link></li>
            <DarkmodeButton />
        </div>
    )
}
export default Footer