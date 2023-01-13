import React from "react";

function navBar() {
    return (
        <nav class="navBar">
            <a>Site Name</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">About</a></li>
             </ul>
        </nav>
    )
}

export default navBar;