import "./form-input.styles"
import {FormInputLabel, Group, Input} from "./form-input.styles";

export default function FormInput({label, ...otherProps}) {
    return (
        <Group>
            <Input
                {...otherProps}
            />
            {
                label && (
                    <FormInputLabel
                        className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
                    >
                        {label}
                    </FormInputLabel>
                )
            }

        </Group>
    );
}