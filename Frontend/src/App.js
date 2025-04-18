import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Home from "./Pages/Home.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Navbar from "./Components/Navbar.jsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "./Components/Loading.jsx";
import axios from "axios";
import Dashboard from "./Pages/Dashboard.jsx";
import { add, gettoken } from "./Redux/Slices/authReducer.js";
import AddProduct from "./Pages/AddProduct.jsx";
import Machine from "./Pages/Machine.jsx";
import RequestList from "./Components/RequestList.jsx";
import ActiveRentalCard from "./Components/ActiveRentalCard.jsx";
import Services from "./Pages/Services.jsx";

const App = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="max-sm:h-auto ">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={Dashboard} />}
          ></Route>
          <Route
            path="/addproduct"
            element={<ProtectedRoute component={AddProduct} />}
          ></Route>
          <Route
            path="/machines"
            element={<ProtectedRoute component={Machine} />}
          ></Route>
          <Route
            path="/machines/requestlist/:id"
            element={<ProtectedRoute component={RequestList} />}
          ></Route>
          <Route
            path="/machines/activerent/:id"
            element={<ProtectedRoute component={ActiveRentalCard} />}
          ></Route>
        </Routes>
      )}
      {/* <Navbar/> */}
      {/* <Loading/> */}
    </div>
  );
};

export default App;
