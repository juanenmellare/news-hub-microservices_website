import Navbar from "../Navbar";
import Footer from "../Footer";

import styles from './Layout.module.scss';


const Layout = ({ children }) => (
    <>
        <Navbar/>
        <main className={`container ${styles.containerCentered} ${styles.containerBody}`}>
            {children}
        </main>
        <Footer/>
    </>
);

export default Layout;
