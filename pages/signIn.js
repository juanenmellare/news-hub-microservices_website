import PageHead from "../src/components/PageHead";
import useLogin from "../src/lib/users/hooks/useLogin";
import FormInput from "../src/components/FormInput";


const SignIn = () => {
    const { setEmail, setPassword, submit} = useLogin();

    return (
        <>
            <PageHead title={'Sign In'}/>
            <div className="card card--border-primary-red card--narrow">
                <h5 className="card-header">Sign In</h5>
                <div className="card-body">
                    <form id="authenticate">
                        <FormInput set={setEmail} name={'email'} label={'Email'}/>
                        <FormInput set={setPassword} name={'password'} label={'Password'} type={'password'}/>
                        <button className="btn btn-primary" onClick={submit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;
