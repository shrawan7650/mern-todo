import { useNavigate } from "react-router-dom"


export const Empty = () => {
  const navigate  = useNavigate();
  return (
  <div className="empty-todo-conatiner">
      <div className="empty-todo">Add New Todo</div>
    <button className="empty-btn" onClick={()=>navigate('/create-todo')}>Click 
    on</button>
  </div>
  )
}
