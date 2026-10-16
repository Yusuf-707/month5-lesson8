import {useForm} from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../untils/schema';

export default function CreateTask({getTasks}) {
    const {handleSubmit, register, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const handlerForm = (data) => {
        axios.post('http://localhost:8000/tasks', data)
        .then(() => {
            getTasks();
            toast('success', 'Task create success!');
        })
        .catch((e) => {
            console.log(e)
            toast('error', 'Error, something wrong!');
        })
    }

  return (
    <form onSubmit={handleSubmit(handlerForm)}>
        <input type="text" {...register('text')} placeholder="Задача" />
        {errors?.text && (<p style={{color: 'red'}}>{errors?.text?.message}</p>)}
        <select {...register('status')} id="status">
            <option value="true">Активная</option>
            <option value="false">Не активная</option>
        </select>
        {errors?.status && (<p>{errors?.status?.message}</p>)}
        <input type="date" {...register('date')} />
        {errors?.date && (<p>{errors?.date?.message}</p>)}
        <button type="submit">Add</button>
    </form>
  )
}

