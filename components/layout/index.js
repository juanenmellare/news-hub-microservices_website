import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => (
    <>
        <Navbar/>
        <main className={"container container--centered container-body"}>
            {children}
        </main>
        <Footer/>
    </>
);

export default Layout;
