import { NavLink } from "react-router-dom"
import styles from "../assets/styles/NavMain.module.css"

export function NavMain(){
    return (
    <nav className={styles.NavMain}>
        <ul>
            <li>
                 <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/members">1</NavLink>
            </li>
            <li>
                <NavLink to="/quiz">2</NavLink>
            </li>
            <li>
                <NavLink to="/accordion_panel">3</NavLink>
            </li>
        </ul>
    </nav>
    )
}