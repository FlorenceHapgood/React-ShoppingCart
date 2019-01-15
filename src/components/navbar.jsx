import React, { Component } from 'react';

// Stateless Functional Component(just a method, as it was not necessary
// to have a class for this

const NavBar = (props) => {
    return (
      <nav className="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
        </a>
      </nav>
    );
  };

export default NavBar
