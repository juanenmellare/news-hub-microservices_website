import '../styles/globals.scss';

import Layout from "../src/components/Layout";
import {UserDataProvider} from "../src/lib/users/hooks/useUserDataContext";

const MyApp = ({ Component, pageProps }) => (
    <UserDataProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </UserDataProvider>
);

export default MyApp;
