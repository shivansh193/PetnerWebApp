import React from "react";
import "../bootstrap.css";
import "../styles.css"
import { FaBriefcaseMedical, FaCheckCircle, FaHeart} from "react-icons/fa";

export default function Features() {
  return (
    <section className="hi">
      <section id="features">
        <div class="row">
          <div class="col-lg-4">
            <h3>
         <FaHeart/> DATE WITH A DOG
            </h3>
            <p>
              Book yourself a date with a dog at the convinience of your home
            </p>
          </div>
          <div class="col-lg-4">
            <h3>
              <FaBriefcaseMedical/>E-COMMERCE PLATFORM
            </h3>
            <p>
              We deliver pet care supplies and services, be it food, training or
              walking we have it all
            </p>
          </div>
          <div class="col-lg-4">
            <h3>
              <FaCheckCircle/>SOCIALISE
            </h3>
            <p>Find people in your area with a similar pet and socialise!</p>
          </div>
        </div>
      </section>
    </section>
  );
}
