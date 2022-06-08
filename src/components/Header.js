import React from "react";
import "../bootstrap.css";
import { FaFileSignature } from "react-icons/fa";

const logo = require("./iphone6.png");

export default function Header() {
  return (
    <div className="container-fluid h-25">
      <section id="title" className="h-25">
        <nav className="navbar navbar-expand-sm navbar-dark">
          <a className={"navbar-brand"} href="">
            Petner
          </a>
          <button
            className={"navbar-toggler"}
            type="button"
            data-bs-toggle={"collapse"}
            data-bs-target={"#navbarSupportedContent"}
            aria-controls={"navbarSupportedContent"}
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={"navbar-toggler-icon"}></span>
          </button>
          <div
            className={"collapse navbar-collapse"}
            id="navbarSupportedContent"
          >
            <ul className={"navbar-nav ms-auto"}>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="#press">
                  Contact
                </a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="#pricing">
                  Pricing
                </a>
              </li>
              <li className={"nav-item"}>
                <a className={"nav-link"} href="#cta">
                  Pre-Register
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className={"row h-25"}>
          <div className={"col-lg-6"}>
            <h1 className="ii">Meet new and interesting dogs nearby.</h1>
            <h1>Launching Soon In DELHI NCR</h1>
            <h2> Register yourself for the BETA ASAP</h2>
            <a href="http://eepurl.com/h3sX9D">
              <button
                type="button"
                className="btn btn-outline-light btn-lg btn1 ii"
              >
                <FaFileSignature /> Pre register
              </button>
            </a>
          </div>

          <div className={"col-lg-6"}>
            <img
              src={logo}
              alt="iphone-mockup"
              className={
                "rotate rotate-translate translate-rotate cropped cropped-img"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
