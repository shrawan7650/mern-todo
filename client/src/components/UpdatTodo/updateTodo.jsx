import { useState } from "react";
import axios from "axios";
import "./update.css";
import { Bounce, toast } from 'react-toastify';
import image from "../../assets/update.png";
import { useSearchParams } from "react-router-dom";
export const UpdateTodo = () => {
  const [searchParams] = useSearchParams();
  const myParam = searchParams.get("id");
  // console.log("params",myParam)
  const [value, setValue] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (event) => {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    const { title, description } = value;
    const todo = {
      title,
      description,
    };
    if (!title || !description) {
      alert("Please enter the fields");
    } else {
      try {
        const res = await axios.put(
          `http://localhost:3000/api/todo/${myParam}`,
          todo
        );
        toast.success(res.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      //  alert(res.data.msg)
        // console.log(res)
        setValue({ title: "", description: "" }); // Clear input fields after successful submission
      } catch (err) {
        console.log("Error couldn't create TODO");
        console.log(err.message);
      }
    }
  };
  return (
    <div className="wrapper-update">
      <div className="main-conatiner-update">
        <h1>UPDATE TODO</h1>
        <div className="line-show"></div>
        <form onSubmit={sumbitHandler}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              value={value.title} // Set input value to state value
              type="text"
              className="form-control"
              onChange={changeHandler}
              id="exampleFormControlInput1"
              placeholder="Write title"
              name="title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              value={value.description}
              onChange={changeHandler}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            {" "}
            UPDATE TODO
          </button>
        </form>
      </div>
      <div className="image-update">
        <img src={image} />
      </div>
    </div>
  );
};
export default UpdateTodo;
