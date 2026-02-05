import React from "react";

function Header() {
    return (
        <header className="site-header">
            <div className="logo">My App</div>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header
