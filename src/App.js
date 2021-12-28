import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './sb-admin-2.css';
import Dashboard from './Dashboard';
import UserList from './UserList.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreateUser from './CreateUser';
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';
 

function App() {
  return (
    <BrowserRouter>

    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <div class="container-fluid">
            <Routes>
              <Route path="/" element={<Dashboard/>}></Route>
              <Route path="/user" element={<UserList/>}></Route>
              <Route path="/Product" element={<ProductList/>}></Route>
              <Route path="/user-create" element={<CreateUser/>}></Route>
              <Route path="/Product-create" element={<CreateProduct/>}></Route>

            </Routes>
          </div>
        </div>
      </div>


    </div>
    </BrowserRouter>

  );
}

export default App;
