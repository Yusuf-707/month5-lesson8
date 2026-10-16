import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import CreateTask from "../components/CreateTask";
import Tasks from "../components/Tasks";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [search, setSearch] = useState("");

  const getTasks = () => {
    axios
      .get("http://localhost:8000/tasks")
      .then(({ data }) => {
        setTasks(data);
        setFilteredTasks(data); 
      })
      .catch((e) => console.log(e));
  };

  const handlerFilter = () => {
    const query = search.trim().toLowerCase();

    if (!query) {
      setFilteredTasks(tasks);
      return;
    }

    const filteredItem = tasks.filter((item) =>
      item.text?.toLowerCase().includes(query)
    );

    setFilteredTasks(filteredItem);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <CreateTask getTasks={getTasks} />
      <h1>Задачи</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Поиск..."
      />
      <button onClick={handlerFilter}>Найти</button>

      <Tasks tasks={filteredTasks} />
      <ToastContainer />
    </div>
  );
}