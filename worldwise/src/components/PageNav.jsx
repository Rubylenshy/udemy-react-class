import { NavLink } from "react-router-dom"
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
    const navigations = [
        {path: "/pricing", label: "Pricing"},
        {path: "/product", label: "Product"},
        {path: "/login", label: "Login"}
    ]
    return (
        <nav className={styles.nav}>
            <NavLink to="/" >
                <Logo />
            </NavLink>
            
            <ul>
                {navigations.map(nav => (
                    <li key={nav.path}>
                        <NavLink to={nav.path} className={nav.path === '/login' ? styles.ctaLink : ''}>{nav.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default PageNav
