import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styles from '../css/Navigation.module.css'

function Navigation({ units, setUnits }) {


    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
    };

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

        return (
            <li className={isActive === to ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    return (
        <nav className={styles.navbar}>
            <div>
                <Link
                    name="metric"
                    className={styles.navitem}
                    onClick={handleUnitsChange}
                >C</Link>
            </div>
            <div>
                <Link
                    name="imperial"
                    className={styles.navitem}
                    onClick={handleUnitsChange}
                >F</Link>
            </div>
            <div>
                <CustomLink
                    to="/daily"
                    className={styles.navitem}
                >Daily</CustomLink>
            </div>
            <div>
                <CustomLink
                    to="/hourly"
                    className={styles.navitem}
                >Hourly</CustomLink>
            </div>
        </nav>
    )
}

export default Navigation