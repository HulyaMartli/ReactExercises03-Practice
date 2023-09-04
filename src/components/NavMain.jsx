import { Link } from "react-router-dom"
import styles from "../assets/styles/NavMain.module.css"

export function NavMain(){
    return (
    <nav className={styles.NavMain}>
        <ul>
            <li>
                 <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/members">Members</Link>
            </li>
        </ul>
    </nav>
    )
}