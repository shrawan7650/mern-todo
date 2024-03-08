// App.js
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTodo from "./components/CreateTodo/createTodo";
import ShowTodoList from "./components/DisplayTodo/showTodoList";
import NavBar from "./components/NavBar/NavBar";
import UpdateTodo from "./components/UpdatTodo/updateTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app-contents">
        <ToastContainer />
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ShowTodoList />} />
            <Route path="/create-todo" element={<CreateTodo />} />
            <Route path="/update-todo" element={<UpdateTodo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
