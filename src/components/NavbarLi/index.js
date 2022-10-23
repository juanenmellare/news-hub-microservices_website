import React from 'react';

import Link from "next/link";

import styles from './NavbarLi.module.scss';
import {useRouter} from "next/router";


const NavbarLi = ({href, label, onClick}) => {
    const { pathname } = useRouter();
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        setIsActive(href === pathname.substring(1));
    }, [href, pathname]);

    return (
        <li className="nav-item">
            <Link href={href ? `/${href}` : '/'}>
                <a className={`nav-link ${styles.navbarItemsLink} ${isActive ? ' active' : ''}`} onClick={onClick}>
                    {label}
                </a>
            </Link>
        </li>
    );
};

export default NavbarLi;
