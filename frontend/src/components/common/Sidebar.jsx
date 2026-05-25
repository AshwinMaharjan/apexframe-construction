import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";

const Sidebar = () => {
    const {logout} = useContext(AuthContext);
  return (
    <div className="section-13">
      <div className="card shadow border-0">
        <div className="card-body">
          <h4>Sidebar</h4>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <button className="btn btn-primary" onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
