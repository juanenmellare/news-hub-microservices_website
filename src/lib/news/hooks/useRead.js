import React from "react";
import axios from "axios";


const useRead = ({id, url, hasBeenRead}) => {
    const [hasBeenReadValue, setHasBeenReadValue] = React.useState(hasBeenRead);
    const [error, setError] = React.useState(null);

    const read = () => {
        if (!hasBeenReadValue) {
            axios.put(`/api/news/${id}`)
                .then(_ => setHasBeenReadValue(true))
                .catch(e => setError(e.toString()));
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return {
        read,
        hasBeenRead: hasBeenReadValue,
        error
    };
}

export default useRead;
