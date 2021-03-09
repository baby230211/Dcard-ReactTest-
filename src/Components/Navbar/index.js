
import React from 'react';
import { Link } from 'react-router-dom';
const cityData = [
        "Taipei",
        "NewTaipei",
        "Taoyuan",
        "Taichung",
        "Tainan",
        "Kaohsiung",
        "Keelung",
        "Hsinchu",
        "HsinchuCounty",
        "MiaoliCounty",
        "ChanghuaCounty",
        "NantouCounty",
        "YunlinCounty",
        "ChiayiCounty",
        "Chiayi",
        "PingtungCounty",
        "YilanCounty",
        "HualienCounty",
        "TaitungCounty",
        "KinmenCounty",
        "PenghuCounty",
        "LienchiangCounty"
]
const LinkList = cityData.map((city) => {
  let url="/scenicSpot"
    return (
      <Link className="dropdown-item" to={`${url}/${city}`} key={city}>
        {city}
      </Link>
    );
  });
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      {/* <Link className="navbar-brand" to="/">
        <img alt="react-router-breadcrumb" width="30" height="30" />
      </Link> */}

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/scenicSpot">
              所有城市
            </Link>
          </li>
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              選擇城市
            </div>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {LinkList}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };