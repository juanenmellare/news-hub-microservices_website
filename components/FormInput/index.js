const FormInput = ({set, name, label, type}) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <input name={name} type={type ? type : 'text'} className="form-control" id={name} required
               onChange={({target: { value }}) => { set(value) }}/>
    </div>
);


export default FormInput;
