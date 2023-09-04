import { Link } from "react-router-dom"
import styles from "../assets/styles/NavMain.module.css"

export function NavMain(){
    return (
    <nav className={styles.NavMain}>
        <ul>
            <li>
                 <Link to="/">Main Page</Link>
            </li>
            <li>
                <Link to="/02">Page 2</Link>
            </li>
        </ul>
    </nav>
    )
}