import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendApiMain } from './shared'

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [tempItem, setTempItem] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const url = backendApiMain + `/item/${id}`;
    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setTempItem(data);
      });
  }, [id]);

  if (notFound) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container">
      <div className="btn-group p-1">
        <button type="button" className="btn btn-sm btn-primary dropdown-toggle p-1" data-bs-toggle="dropdown" aria-expanded="false">
          Item actions
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/">Action</a></li>
          <li><a className="dropdown-item" href="/">Another action</a></li>
          <li><a className="dropdown-item" href="/">Something else here</a></li>
          <li><a className="btn btn-danger" href="/">Delete</a></li>
        </ul>
        <div className="">
          <button type="button" className="btn btn-sm btn-primary p-1" aria-expanded="false">
            Assign
          </button>
          <button type="button" className="btn btn-sm btn-primary p-1" aria-expanded="false">
            Edit
          </button>
          <button type="button" className="btn btn-sm btn-primary p-1" aria-expanded="false">
            Change status
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>

      <div className="">
        <ul className="list-group">
          <li className="list-group-item">Title: {item.title}</li>
          <li className="list-group-item">Description: {item.description}</li>
        </ul>
      </div>
      <br /><br /><br />
      <div className="">
        <ul className="list-group">
          <li className="list-group-item"><span className="badge bg-primary rounded-pill">14</span><h3>Comments:  </h3></li>
          <li className="list-group-item">Comment #1</li>
        </ul>
      </div>
    </div >
  );
}

export default ItemDetail;
