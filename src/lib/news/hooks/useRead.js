import React from "react";
import axios from "axios";
import useLogout from "../../users/hooks/useLogout";


const useRead = ({id, url, hasBeenRead}) => {
    const [hasBeenReadValue, setHasBeenReadValue] = React.useState(hasBeenRead);
    const [error, setError] = React.useState(null);

    const { logout } = useLogout();

    const read = () => {
        if (!hasBeenReadValue) {
            axios.put(`/api/news/${id}`)
                .then(_ => {
                    setHasBeenReadValue(true);
                    window.open(url, '_blank', 'noopener, noreferrer');
                }).catch(e => {
                    setError(e.toString());
                    logout().catch(e => setError(e.toString()));
                });
        }
    }

    return {
        read,
        hasBeenReadValue,
        error
    };
}

export default useRead;
