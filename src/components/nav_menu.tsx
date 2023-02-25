import React from "react";
import "./nav_menu.css"
import Link from "next/link";

function NavMenu () {
    return <div id="nav-menu">
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/about_me'>About Me</Link></li>
        </ul>
    </div>
};

export default NavMenu