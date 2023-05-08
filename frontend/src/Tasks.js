import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { backendApiMain } from "./App";

function Tasks() {


  useEffect(() => {
    fetchTasks();
  }, []);

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await fetch(backendApiMain+"/task/all");

    const taskArray = await data.json();

    taskArray.sort((a,b) => a.title > b.title ? 1 : -1)

    setTasks(taskArray);

  }

  const sorted = [].concat(tasks).sort((a,b) => a.id > b.id ? 1 : -1);

  console.log(sorted)

  return (
    <div className="container pt-3">
      <div className="row d-flex">
      TASKS
        <div className="col d-flex justify-content-center">
        <i className="bi bi-filter"></i>
        </div>
        <div className="col">
          <div className="btn btn-sm btn-outline-primary">
            @Me
          </div>

        </div>
        <div className="col">
          <div className="btn btn-sm btn-outline-primary">
            @My team
          </div>
        </div>
      </div>

      <hr></hr>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th>Title</th>
            </tr>
          </thead>
          {sorted.map(task => (
            <div key={task.id}>
              <tbody>
                <tr>
                  <th scope="row"><Link className="btn btn-outline-secondary text-dark p-1" to={`/tasks/${task.id}`}>{task.title}</Link></th>
                  <th>{task.title}</th>
                </tr>
              </tbody>
            </div>
          ))}
        </table>
      </div>

    </div>
  );
}

export default Tasks;
