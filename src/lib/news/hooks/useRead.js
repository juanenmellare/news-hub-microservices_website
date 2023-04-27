import React from "react";
import axios from "axios";
import useLogout from "../../users/hooks/useLogout";
import {useUserDataContext} from "../../users/hooks/useUserDataContext";


const useRead = ({id, url, hasBeenRead}) => {
    const [hasBeenReadValue, setHasBeenReadValue] = React.useState(hasBeenRead);
    const [error, setError] = React.useState(null);
    const { userData } = useUserDataContext();

    const { logout } = useLogout();

    React.useEffect(() => {
        setHasBeenReadValue(!!hasBeenRead);
    }, [hasBeenRead]);

    const openNewTabUrl = (url) => window.open(url, '_blank', 'noopener, noreferrer');

    const read = () => {
        console.log(userData);
        if (userData && !hasBeenReadValue) {
            axios.put(`/api/news/${id}`)
                .then(_ => {
                    setHasBeenReadValue(true);
                    openNewTabUrl(url);
                }).catch(e => {
                    setError(e.toString());
                    logout().catch(e => setError(e.toString()));
                });
        } else {
            openNewTabUrl(url);
        }
    }

    return {
        read,
        hasBeenRead: hasBeenReadValue,
        error
    };
}

export default useRead;
