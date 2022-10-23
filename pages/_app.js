import '../styles/globals.scss';

import Layout from "../components/Layout";
import {UserDataProvider} from "../lib/users/hooks/useUserDataContext";

const MyApp = ({ Component, pageProps }) => (
    <UserDataProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </UserDataProvider>
);

export default MyApp;
