import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">

      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          IceCream
        </Link>


        <button 
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>



        <div 
          className="collapse navbar-collapse" 
          id="navbarSupportedContent"
        >


          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            <li className="nav-item">
              <Link 
                className="nav-link active" 
                to="/"
              >
                Home
              </Link>
            </li>



            <li className="nav-item">
              <Link 
                className="nav-link"
                to="/offer"
              >
                Today's Offers
              </Link>
            </li>



            <li className="nav-item">

              <Link
                className="nav-link"
                to="/franchise"
              >
                Franchise
              </Link>

            </li>




            <li className="nav-item">

              <Link 
                className="nav-link"
                to="/store-loc"
              >
                Store Location
              </Link>

            </li>


          </ul>




          <form className="d-flex" role="search">


            <Link 
              to="/login"
              className="nav-link me-3 mt-1"
            >
              <FaRegUser />
            </Link>



            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />



            <button 
              className="btn btn-outline-success"
              type="button"
            >
              Search
            </button>


          </form>


        </div>

      </div>

    </nav>
  );
};


export default Navbar;