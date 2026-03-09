import { Navbar } from "./components/navbar/Navbar";
import { AddUser } from "./pages/AddUser";
import { EditUserPg } from "./pages/EditUserPg";
import { Home } from "./pages/Home";
import { ProfilePg } from "./pages/ProfilePg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <section>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addUser" element={<AddUser />} />
          <Route exact path="/userInfo/:id" element={<ProfilePg/>}/>
          <Route exact path="/editUser/:id" element={<EditUserPg/>}/>
        </Routes>
      </Router>
    </section>
  );
}

export default App;
