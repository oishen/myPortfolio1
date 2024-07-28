import React, { useEffect } from 'react';

const Navbar = () => {
    useEffect(() => {
        document.body.setAttribute('data-bs-spy', 'scroll');
        document.body.setAttribute('data-bs-target', '.navbar');
        document.body.setAttribute('data-bs-offset', '0');
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top mt-lg-4" >
            <div className="container-lg">
                <a className="navbar-brand" >Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav gap-3 row-gap-1 text-center">
                        <li className="nav-item">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#service" className="nav-link">Service</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar