import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function Detail() {
    const {id} = useParams();
    const [data, setData] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/tasks/${id}`).then(({data})=> setData(data))
        .catch((e) => console.log(e))
    }, [id]);
    
  return (
    <div>
        <h1>Описание задния</h1>
        <p>{data?.text}</p>
        <h2>Статус</h2>
        <p>{data?.status}</p>
        <h2>Дата</h2>
        <p>{data?.date}</p>
        <button onClick={navigate(-1)}>Назад к списку</button>
    </div>
  )
}
