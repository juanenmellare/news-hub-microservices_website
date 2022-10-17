import styles from './Footer.module.scss';


const Footer = () => (
    <footer className={`${styles.footer} ${styles.backgroundUbSecondary}`}>
        <span className={`${styles.footerText}`}>News Hub | Microservices</span>
    </footer>
);

export default Footer;
