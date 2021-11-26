import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Footer = () => {
  const [page, setPage] = useState(3);
  const navigate = useNavigate();
  const list = [
    {
      name: " details",
      link: "/details",
    },
    {
      name: "pricing",
      link: "/pricing",
    },
    {
      name: " Collaborators",
      link: "/",
    },
    {
      name: "mint nft",
      link: "/mint",
    },
  ];

  const handleClick = () => {
    if (page === 3) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
    var link = list[page].link;
    navigate(link);
  };

  return (
    <div className="footer">
      <div className="linksContainer">
        <ul className="linkList">
          <li className="navItems">
            <NavLink
              to="/details"
              className="navLinks"
              activeClassName="active"
            >
              Details
            </NavLink>
          </li>
          <li className="navItems">
            <AiFillCaretRight className="arrow" />
          </li>
          <li className="navItems">
            <NavLink
              to="/pricing"
              className="navLinks"
              activeClassName="active"
            >
              Pricing
            </NavLink>
          </li>
          <li className="navItems">
            <AiFillCaretRight className="arrow" />
          </li>
          <li className="navItems">
            <NavLink to="/" className="navLinks" activeClassName="active">
              Collaborators
            </NavLink>
          </li>
          <li className="navItems">
            <AiFillCaretRight className="arrow" />
          </li>
          <li className="navItems">
            <NavLink to="/mint" className="navLinks" activeClassName="active">
              Mint nft
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="btnContainer">
        <button className="nextBtn" onClick={handleClick}>
          next page <AiFillCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Footer;
