import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "./Card/TodoCard";
import { Bounce, toast } from 'react-toastify';
import Spinner from "../Spinner/Spinner";
import "./showTodo.css";
import { useNavigate } from "react-router-dom";
const ShowTodoList = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchData = () => {
    axios
      .get("http://localhost:3000/api/todo/all")
      .then((res) => {
        setValue(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 2000); //
  }, []);
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todo/${id}`);
      toast.success("Todo deleted successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      setValue(value.filter((prevValue) => prevValue._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const editHandler = (id) => {
    navigate(`/update-todo?id=${id}`);
  };  
  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="show-heading">SHOW TODO LIST</h1>
      <div className="line-show"></div>
      <div className="show-todo-conatiner">
        {value.map((data) => (
          <TodoCard
            data={data}
            key={data._id}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </div>
    </>
  );
};

export default ShowTodoList;
