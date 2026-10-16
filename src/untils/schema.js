import * as yup from 'yup';

export const schema = yup.object({
    text: yup.string().required('Поле нужно заполнить!').min(10, 'Нужно больше 10 символов ввести!').max(255, 'Максимальное значение 255 больше нельзя!'),
    status: yup.string().required('Заполните!').notOneOf(['']),
    date: yup.string().required('Заполните дату!')
});