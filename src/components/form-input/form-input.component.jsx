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
                        shrink={otherProps.value.length}
                    >
                        {label}
                    </FormInputLabel>
                )
            }

        </Group>
    );
}