import React from "react";
import axios from "axios";
import {useRouter} from "next/router";


const useCreateUser = () => {
    const router = useRouter();

    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordRepeat, setPasswordRepeat] = React.useState('');
    const [isFormValid, setIsFormValid] = React.useState(false);

    React.useEffect(() => {
        setIsFormValid(firstName && lastName && email && password && passwordRepeat);
    }, [firstName, lastName, email, password, passwordRepeat]);

    const submit = (event) => {
        const form = event.currentTarget;

        if (isFormValid && form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            const path = '/api/users';
            const data = { firstName, lastName, email, password, passwordRepeat };
            axios.post(path, { data }).then(() => router.push('/signIn'));
        }
    }

    return {
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
        setPasswordRepeat,
        submit
    };
}

export default useCreateUser;
