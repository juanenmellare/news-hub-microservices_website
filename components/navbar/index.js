import React from 'react';
import NavbarLi from "../navbarLi";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark background__ub--primary fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand logo" href="/">
                <img src={"newspaper.svg"}
                     height="40"
                     className="d-inline-block align-text-top logo__image"
                     alt={"News Hub Logo"}/>
                <span className="logo__span">Hub</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse navbar__items" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <NavbarLi href={""} label="News"/>
                    <NavbarLi href={"signIn"} label="Sign In"/>
                    <NavbarLi href={"signUp"} label="Sign Up"/>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
