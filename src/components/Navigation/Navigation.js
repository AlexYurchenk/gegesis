import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export default function Navigation(params) {
  return (
    <nav className={styles.NavigationNav}>
      <NavLink
        className={styles.NavigationNavItem}
        activeClassName={styles.NavigationNavItemActive}
        exact
        to="/"
      >
        HomePage
      </NavLink>
      <NavLink
        className={styles.NavigationNavItem}
        activeClassName={styles.NavigationNavItemActive}
        to="/movies"
      >
        MoviesPage
      </NavLink>
    </nav>
  );
}
