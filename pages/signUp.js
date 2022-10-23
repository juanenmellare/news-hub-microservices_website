import PageHead from "../components/PageHead";
import FormInput from "../components/FormInput";
import useCreateUser from "../lib/users/hooks/useCreateUser";


const SignUp = () => {
    const { setFirstName, setLastName, setEmail, setPassword, setPasswordRepeat, submit } = useCreateUser();

    return (
        <>
            <PageHead title={'Sign Up'}/>
            <form id="signup-form" className="card card--border-primary-red card--narrow">
                <h5 className="card-header">Sign Up</h5>
                <div className="card-body">
                    <FormInput set={setFirstName} name={'firstName'} label={'First name'}/>
                    <FormInput set={setLastName} name={'lastName'} label={'Last name'}/>
                    <FormInput set={setEmail} name={'email'} label={'Email address'} type={'email'}/>
                    <FormInput set={setPassword} name={'password'} label={'Password'} type={'password'}/>
                    <FormInput set={setPasswordRepeat} name={'passwordRepeated'} label={'Repeat Password'} type={'password'}/>
                    <button className="btn btn-primary" type="submit"
                            onClick={(event) => submit(event)}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default SignUp;
