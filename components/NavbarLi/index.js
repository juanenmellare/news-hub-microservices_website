import React from 'react';

import styles from './NavbarLi.module.scss';


const NavbarLi = ({href, label}) => {
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        setIsActive(window.location.pathname.split('/')[1] === href);
    }, [href]);

    return (
        <li className="nav-item">
            <a className={`nav-link ${styles.navbarItemsLink} ${isActive ? ' active' : ''}`} href={`/${href}`}>
                {label}
            </a>
        </li>
    );
};

export default NavbarLi;
