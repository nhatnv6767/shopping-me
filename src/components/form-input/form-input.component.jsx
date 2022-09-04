export default function FormInput({label, ...otherProps}) {
    return (
        <div>
            <label>{label}</label>
            <input
                {...otherProps}
            />
        </div>
    );
}