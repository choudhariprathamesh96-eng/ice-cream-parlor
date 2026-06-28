import React from "react";
import "./Franchies.css";

const Franchies = () => {

  const submitFranchise = (e) => {
    e.preventDefault();
    alert("Thank you! Your franchise request has been submitted 🍦");
  };


  return (
    <div className="franchiseContainer">

      <h1 className="franchiseTitle">
        Start Your Ice Cream Franchise
      </h1>


      <p className="franchiseSubtitle">
        Join our ice cream family and grow your business with us 🍨
      </p>



      <div className="franchiseCard">


        <img
          className="franchiseImg"
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb"
          alt="Ice Cream Franchise"
        />



        <form 
          className="franchiseForm"
          onSubmit={submitFranchise}
        >


          <input
            type="text"
            placeholder="Enter Your Name"
            required
          />


          <input
            type="email"
            placeholder="Enter Your Email"
            required
          />


          <input
            type="tel"
            placeholder="Enter Phone Number"
            required
          />


          <input
            type="text"
            placeholder="Enter City"
            required
          />


          <textarea
            placeholder="Why do you want a franchise?"
            required
          ></textarea>



          <button
            type="submit"
            className="franchiseBtn"
          >
            Apply Now
          </button>


        </form>





        <div className="franchiseInfo">


          <div className="infoBox">
            <h3>Low Investment</h3>
            <p>
              Start your ice cream business with affordable cost.
            </p>
          </div>



          <div className="infoBox">
            <h3>Brand Support</h3>
            <p>
              Get complete marketing and business support.
            </p>
          </div>




          <div className="infoBox">
            <h3>High Growth</h3>
            <p>
              Grow with our popular ice cream brand.
            </p>
          </div>


        </div>


      </div>


    </div>
  );
};


export default Franchies;