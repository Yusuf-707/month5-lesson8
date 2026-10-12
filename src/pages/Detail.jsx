import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Detail() {
    const { id } = useParams()
    const [data, setData] = useState()
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/tasks/${id}`)
            .then(({ data }) => setData(data))
            .catch((e) => console.log(e))
    }, [id])
    return (
        <div>Detail
            <p>{data?.text}</p>
            <p>{data?.status}</p>
            <p>{data?.date}</p>
        </div>
    )
}
