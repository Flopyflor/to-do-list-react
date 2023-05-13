import { useEffect, useState } from 'react'
import {sanitize} from '../../utils/sanitize.js';

export function useAddTaskForm({ isValidForm, extraOnSubmit } = {}) {

    const [form, setForm] = useState({});
    const [readyToSend, setReadyToSend] = useState(false);


    const handleChange = (e) => {
        let { name, value } = e.target;

        const newForm = {
            ...form,
            [name]: value
            }

        setForm(newForm);
        setReadyToSend(isValidForm(newForm))

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!readyToSend) return;

        const dataToSend = {};
        const emptyForm = {}

        for (const prop in form) {
            dataToSend[prop] = sanitize(form[prop]);
            emptyForm[prop] = '';
        }

        //TODO: enviar al backend

        setForm(emptyForm);

        if(extraOnSubmit) extraOnSubmit();
    }

    return {
        handleChange,
        handleSubmit,
        form,
        readyToSend
    }
}