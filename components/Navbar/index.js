import React from 'react';

import Link from "next/link";
import NavbarLi from "../NavbarLi";

import styles from './Navbar.module.scss';


const Navbar = () => (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.backgroundUbPrimary} fixed-top`}>
        <div className="container-fluid">
            <Link href="/">
                <a className={`navbar-brand ${styles.logo}`}>
                    <img src={"newspaper.svg"}
                         height="40"
                         className={`d-inline-block align-text-top ${styles.logoImage}`}
                         alt={"News Hub Logo"}/>
                    <span className={`${styles.logoSpan}`}>Hub</span>
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={`collapse navbar-collapse ${styles.navbarItems}`} id="navbarSupportedContent">
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
