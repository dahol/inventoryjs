import * as React from "react"
import { Link } from 'react-router-dom'

// markup
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light border">
  <div className="container">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item p-2">
          <Link className="text-decoration-none" to="/"><button type="button" class="btn btn-info">Dashboard</button></Link>
        </li>
        <li className="nav-item p-2">
          <Link className="text-decoration-none" to="/items"><button type="button" class="btn btn-info">Items</button></Link>
        </li>
        <li className="nav-item p-2">
        <Link className="" to="/tasks"><button type="button" class="btn btn-info">Tasks</button></Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header
