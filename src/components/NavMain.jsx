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
                <NavLink to="/members">Members</NavLink>
            </li>
            <li>
                <NavLink to="/quiz">Quiz</NavLink>
            </li>
            <li>
                <NavLink to="/04">Page 04</NavLink>
            </li>
        </ul>
    </nav>
    )
}