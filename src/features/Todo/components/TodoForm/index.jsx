import React from 'react';
import InputField from "../form-control/inputField";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
 import * as yup from "yup";

function TodoForm(props) {
    const schema = yup.object({
        title: yup.string()
            .required('Please enter title')
            .min(5, 'Title is too short'),
    });

    const form = useForm({
        defaultValue: {
            title: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = (values) => {
        console.log("todo form", values)
        const {onSubmit} = props;
        if (onSubmit) {
            onSubmit(values)
        }
        form.reset();
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            {/*<InputField name="title" lable="Todo" form={form}/>*/}
        </form>
    );
}

export default TodoForm;