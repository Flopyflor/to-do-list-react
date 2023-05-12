import { useState } from 'react'
import {sanitize} from '../../utils/sanitize.js';

export function useAddTaskForm() {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        let { name, value } = e.target;

        setForm({
        ...form,
        [name]: value
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {};
        const emptyForm = {}

        for (const prop in form) {
            dataToSend[prop] = sanitize(form[prop]);
            emptyForm[prop] = '';
        }

        //TODO: enviar al backend

        setForm(emptyForm);
    }

    return {
        handleChange,
        handleSubmit,
        form
    }
}