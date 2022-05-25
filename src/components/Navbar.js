import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import {

  Link
} from "react-router-dom";

const Navbar = () => {

  const [text, settext] = useState("Enter Keyword")
  const history = useHistory();
  return (
    <div>


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">News5</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">



            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select Category
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/bussiness">Bussiness</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/technology">Technology</Link>
                </li>

              </div>

            </li>
          </ul>
          <form class="form-inline" style={{ maginLeft: 'auto' }}>
            <input class="form-control mr-sm-2" type="search" placeholder={text} aria-label="Search" onChange={(e) => { settext(e.target.value); console.log(e.target.value) }} />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => history.push(`/search/${text}`)}>Search</button>
          </form>
        </div>
      </nav>




      {/* 
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand" to="/">NEWS5</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <div class="dropdown show">
                  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Category
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/bussiness">Bussiness</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/technology">Technology</Link>
                    </li>

                  </div>
                </div>











              </li>
            </ul>

          </div>
        </div>
      </nav> */}
    </div>
  )

}

export default Navbar
