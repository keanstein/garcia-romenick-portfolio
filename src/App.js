import AppNavbar from "./components/AppNavbar"

import Home from "./pages/Home";
import Login from "./pages/Login"; 

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import PreLoaderPage from "./animation/PreLoaderPage.js"
import { Container } from "react-bootstrap";
import "./App.css"




function App() {
  return (
    <>
      {/* <UserProvider value={{user, setUser, unsetUser}}> */}
      <div id="home"></div>
      <Router>
        <PreLoaderPage />
        <AppNavbar />
        <Container fluid className='p-0 m-0'>
          <Routes>
          
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Container>
        </Router>
    {/* </UserProvider> */}
      </>
  );
}

export default App;
