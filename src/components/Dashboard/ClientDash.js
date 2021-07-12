import React from "react";
import ClientLogo from "../../assets/Client-logo.png";

const ClientDash = () => {
  return (
    <div className="client-dash">
      <header>
        <div className="client-logo">
          <img src={ClientLogo}></img>
        </div>
        <div className="edit">
          <p>Client X</p>

          <a  href="#">
            Edit
          </a>
        </div>
      </header>

      

      <div className="panel">
      <div className="breadcrumbs"></div>
        <button className="btn action">New Deal</button>
        <table className="">
          <tr>
            <th>Deal</th>
            <th>Added</th>
            <th>Order No.</th>
          </tr>
          <tr>
            <td>East Coast Project</td>
            <td>2021/06/28</td>
            <td>XY-0878</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ClientDash;
