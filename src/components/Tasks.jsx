import { useNavigate } from "react-router-dom"

export default function Tasks({tasks}) {
    const navigate = useNavigate()
  return (
    <div>
        {
            tasks?.map((task) => (
                <div key={task.id}>
                    <p>Задача: {task.text}</p>
                    <p>Активность: {tasks.status ? 'Активна' : 'Не активная'}</p>
                    <p>дата: {task.date}</p>
                    <button onClick={() => navigate(`/detail/${task.id}`)}>Detail</button>
                </div>
            ))
        }
    </div>
  )
}
