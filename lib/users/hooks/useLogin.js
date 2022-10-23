import React from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {useUserDataContext} from "./useUserDataContext";


const useLogin = () => {
    const router = useRouter();
    const { setUserData } = useUserDataContext();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);
    const [isFormValid, setIsFormValid] = React.useState(false);

    React.useEffect(() => {
        setIsFormValid(email && password);
    }, [email, password]);

    const submit = (event) => {
        const form = event.currentTarget;

        if (isFormValid && form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            const data = { email, password };
            axios.post('/api/login', { data })
                .then(() => axios.get('/api/users/'))
                .then(({ data }) => {
                    setUserData(data);
                    return router.push('/');
                })
                .catch(e => setError(e.toString())).catch(e => setError(e.toString()));
        }
    }

    return {
        setEmail,
        setPassword,
        error,
        submit
    };
}

export default useLogin;
