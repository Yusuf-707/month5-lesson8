import * as yup from 'yup'

export const schema = yup.object({
    text: yup.string().required("поле нужно заполнить!").min(10, "Нужно больше 10").max(255, 'максимум 255'),
    status: yup.string().required('заполнить!').notOneOf(['']),
    date: yup.string().required("Заполните дату")
})