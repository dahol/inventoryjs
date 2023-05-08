import Header from './components/Header'

import Dashboard from './Dashboard'
import Items from './Items'
import ItemDetail from './ItemDetail'
import Tasks from './Tasks'
import TaskDetail from './TaskDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const backendApiMain = 'http://backend'



function App() {
  return (

    <Router>

      <div className="App">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>

        <Header />

        <Routes>

          <Route path="/" exact element={ <Dashboard/> } />
          <Route path="/items" element={ <Items/> } />
          <Route path="/items/:id" element={ <ItemDetail/> } />
          <Route path="/tasks" element={ <Tasks/> } />
          <Route path="/tasks/:id" element={ <TaskDetail/> } />
          
        </Routes>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>

      </div>

    </Router>

  );
}

export default App;
