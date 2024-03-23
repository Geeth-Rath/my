import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Component/Main/Main";
import Home from "./Component/Home/Home";
import Create from "./Component/Create/Create";
import Read from "./Component/Read/Read";
import Update from "./Component/Update/Update";
import Delete from "./wwwww/Delete/delete";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/delete/:id" element={<Delete />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
