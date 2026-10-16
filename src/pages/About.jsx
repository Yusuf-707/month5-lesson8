import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
  return (
    <div>
        About
        <button onClick={() => navigate(-1)}>Назад</button>    
    </div>
  )
}
