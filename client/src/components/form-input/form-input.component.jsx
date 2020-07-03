import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props} />
        {label ? (
            <FormInputLabel
                className={`${
                    props.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </FormInputLabel>
        ) : null}
    </GroupContainer>
);

export default FormInput;
