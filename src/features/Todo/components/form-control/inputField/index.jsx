import React from 'react';
import {TextField} from "@material-ui/core";
import PropTypes from "prop-types";
import {Controller} from "react-hook-form";

// InputField.propTypes = {
//     form: PropTypes.object.isRequired,
//     name: PropTypes.object.isRequired,
//
//     label: PropTypes.string,
//     disabled: PropTypes.bool,
// }

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors, formState } = form;
    const hasError = formState.touched[name] && errors[name];

    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}
            fullWidth
            label={label}
            disabled={disabled}
            error={!!hasError}
            helperText={errors[name]?.message} // Sử dụng để hiển thị thông báo lỗi
        />
    );
}

export default InputField;
