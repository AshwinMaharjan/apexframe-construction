import React from "react";
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import Services from "./components/frontend/Services";
import Projects from "./components/frontend/Projects";
import Blogs from "./components/frontend/Blogs";
import BlogDetail from "./components/frontend/BlogDetail";
import ContactUs from "./components/frontend/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.scss";
import { Login } from "./components/backend/Login";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/backend/Dashboard";
import RequireAuth from "./components/common/RequireAuth";
import ProjectDetail from "./components/frontend/ProjectDetail";
import ServiceDetail from "./components/frontend/ServiceDetails";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
<Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/blogs" element={<Blogs />} />
  <Route path="/blogs/:slug" element={<BlogDetail />} />
  <Route path="/projects/:slug" element={<ProjectDetail />} />
  <Route path="/services/:slug" element={<ServiceDetail />} />
  <Route path="/contact-us" element={<ContactUs />} />
  <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
