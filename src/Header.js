
import { Link, useNavigate } from "react-router-dom";

function Header() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#800000' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/home" className="nav-link active">Homee</Link>

              </li>
              <li className="nav-item">

                <Link to="/crudOperation" className="nav-link">Crud Operation</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Examples
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                  <Link to="/redux-example" className="dropdown-item">Redux Example</Link>
                  </li>

                  <li>
                  <Link to="/redux-toolkit-example" className="dropdown-item">Redux ToolKit Example</Link>
                  </li>

                  

                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;