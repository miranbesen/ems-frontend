import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import EmployeeList from "./components/EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {/* http://localhost:3000 */}
          <Route path="/" element={<EmployeeList> </EmployeeList>}></Route>
         {/* http://localhost:3000/employees */}
          <Route path="/employees" element={<EmployeeList> </EmployeeList>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
