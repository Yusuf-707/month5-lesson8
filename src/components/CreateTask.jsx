
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { schema } from '../untils/schema';

export default function CreateTask({ getTasks }) {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            text: '',
            status: 'true',
            date: ''
        }
    });

    const handlerForm = async (data) => {
        try {
            await axios.post('http://localhost:8000/tasks', {
                ...data,
                status: data.status === 'true'
            });

            getTasks();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={handleSubmit(handlerForm)}>
            <input
                type="text"
                {...register('text')}
                placeholder="Задача"
            />
            {errors.text && (
                <p>{errors.text.message}</p>
            )}

            <select {...register('status')} id="status">
                <option value="true">Активная</option>
                <option value="false">Не активная</option>
            </select>
            {errors.status && (
                <p>{errors.status.message}</p>
            )}

            <input
                type="date"
                {...register('date')}
            />
            {errors.date && (
                <p>{errors.date.message}</p>
            )}

            <button type="submit">Add</button>
        </form>
    );
}