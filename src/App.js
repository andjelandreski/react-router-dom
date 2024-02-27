import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {Home, Users, About, UserItem} from "./components";
import UsersContextProvider from './context/UserContext';

function App() {
  return <div className="App">
    <UsersContextProvider>
      <Router>
        <div className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </div>

        <Routes>
          <Route path= "/about" element={<About />} />
          <Route path= "/users" element={<Users />} />
          <Route path='/users/:userId' element={<UserItem/>}/>
          <Route path= "/" element={<Home />} />
        </Routes>
      </Router>
    </UsersContextProvider>
  </div>;
}

export default App;
