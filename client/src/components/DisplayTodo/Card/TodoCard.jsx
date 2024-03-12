/* eslint-disable react/prop-types */
import './card.css'
const TodoCard = ({data,deleteHandler,editHandler}) => {


  return  (
    <div>
      
      <div className="card text-center mb-3" style={{"width": "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Title:{data.title}</h5>
          <h6 className="card-text">
            Description:{data.description}
          </h6>
          <div className='btn'>
          <button  className="btn btn-primary" onClick={()=>deleteHandler(data._id)}>
           Delete Card
          </button>
          <button  className="btn btn-primary" onClick={()=>editHandler(data._id)}>
          Edit text
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

