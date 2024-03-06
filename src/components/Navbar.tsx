import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import rocketShipLogo from "../images/rocket_ship_logo.png";
import "../stylesheets/Navbar.css";

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title"><img id="site_logo" src={ rocketShipLogo } alt="SiteLogo"/></Link>
            <ul>
                <CustomLink to="/query">Query</CustomLink>
                <CustomLink to="/report">Report</CustomLink>
                <CustomLink to="/reports">Reports</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props } : any) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}