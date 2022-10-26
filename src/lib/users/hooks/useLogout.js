import React from "react";
import axios from "axios";

import {useUserDataContext} from "./useUserDataContext";
import {useRouter} from "next/router";


const useLogout = () => {
    const { setUserData } = useUserDataContext();

    const router = useRouter();

    const logout = () => axios.get('/api/logout').then(() => {
        setUserData(null);
        return router.reload();
    });

    return { logout };
}

export default useLogout;
