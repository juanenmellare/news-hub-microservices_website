import React from 'react';

import Link from "next/link";

import styles from './NavbarLi.module.scss';
import {useRouter} from "next/router";


const NavbarLi = ({href, label}) => {
    const { pathname } = useRouter();
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        setIsActive(href === pathname);
    }, [href, pathname]);

    return (
        <li className="nav-item">
            <Link href={`/${href}`}>
                <a className={`nav-link ${styles.navbarItemsLink} ${isActive ? ' active' : ''}`} >
                    {label}
                </a>
            </Link>
        </li>
    );
};

export default NavbarLi;
