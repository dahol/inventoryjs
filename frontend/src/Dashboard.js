import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { backendApiMain } from './shared'

function Items() {


  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(backendApiMain+"/item/all");

    const itemArray = await data.json();

    itemArray.sort((a,b) => a.title > b.title ? 1 : -1)

    setItems(itemArray);

  }

  const sorted = [].concat(items).sort((a,b) => a.id > b.id ? 1 : -1);

  console.log(sorted)

  return (
    <div className="container pt-3">
      <div className="row d-flex">
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
          {sorted.map(item => (
            <div key={item.id}>
              <tbody>
                <tr>
                  <th scope="row"><Link className="btn btn-outline-secondary text-dark p-1" to={`/items/${item.id}`}>{item.title}</Link></th>
                  <th>{item.title}</th>
                </tr>
              </tbody>
            </div>
          ))}
        </table>
      </div>

    </div>
  );
}

export default Items;
