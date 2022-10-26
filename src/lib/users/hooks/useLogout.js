import React from "react";
import axios from "axios";

import {useUserDataContext} from "./useUserDataContext";


const useLogout = () => {
    const { setUserData } = useUserDataContext();

    const logout = () => axios.get('/api/logout').then(() => setUserData(null));

    return { logout };
}

export default useLogout;
