import React, { useState } from "react";
import { Navigation } from "../../assets/data";
import "./header.scss";
import { IoIosSearch } from "react-icons/io";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { BsChevronRight, BsChevronBarUp, BsChevronUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { ImCross } from "react-icons/im";

import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const state = useSelector((state) => state.AddToCart);
  const userData = useSelector((state) => state.account.accountVeri);

  if (navToggle) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "unset";
  }

  const Menu = (e) => {
    let menu = e.target.nextElementSibling;
    let svg = e.target.firstElementChild;

    if (menu && window.innerWidth <= 992) {
      menu.classList.toggle("menu__active");
      svg.classList.toggle("svg");
    }
  };
  window.addEventListener("scroll", () => {
    if (window.innerWidth >= 992) {
      if (window.scrollY >= 100) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    } else {
      setStickyNav(false);
    }
    if (window.pageYOffset > 150) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  });
  return (
    <>
      <header>
        <div
          className="top__header"
          style={stickyNav ? { marginBottom: "56px" } : null}
        >
          <div onClick={() => setNavToggle(true)} className="toggle__icon">
            <img width="25px" src="/images/menu.png" alt="" />
          </div>
          <div className="logo">
            <a href="/" style={{textDecoration:"none",fontSize:"30px",color:"brown"}}>
              {" "}
              BARRTAR
              {/* <img src="/images/logo.png" alt="" /> */}
            </a>
          </div>
          <div className={search ? "search search__active" : "search"}>
            <div className="search__inner">
              <div className="search__icon">
                <BiSearch />
              </div>
              <input type="search" placeholder="Search Products" />
            </div>
          </div>
          <div className="icons">
            <div onClick={() => setSearch(!search)}>
              {!search ? (
                <img width="25px" src="/images/search.png" alt="" />
              ) : (
                <img width="25px" src="/images/close.png" alt="" />
              )}
            </div>
            <div>
              {/* <Link to="/login" style={{ display: "flex" }}>
                {userData ? (
                  <img
                    width="25px"
                    height="25px"
                    src={userData?.photoURL}
                    style={{
                      borderRadius: "50%",
                      border: "1px solid #e0e0e0",
                      padding: "5px",
                      marginTop: "-5px",
                      width: "35px",
                      height: "35px",
                    }}
                  />
                ) : (
                  <img width="25px" src="/images/use.png" alt="" />
                )}

                <h3>{userData?.displayName}</h3>
              </Link> */}
            </div>
            <div className={stickyNav ? "cart__sticky" : ""}>
              {" "}
              <img width="25px" src="/images/cart.png" alt="" />
              <span>{state?.length}</span>
            </div>
          </div>
        </div>
        <nav
          className={stickyNav ? "sticky" : ""}
          style={navToggle ? { left: "0" } : {}}
        >
          <ul>
            {Navigation.map((item, i) => {
              return (
                <li key={i} className="nav__item" style={{ zIndex: 99 - i }}>
                  <div onClick={Menu} className="name">
                    {item?.name} {item.SubCat ? <BsChevronRight /> : null}
                  </div>
                  {item?.SubCat ? (
                    <ul className="sub_menu">
                      {item?.SubCat.map((sub, i) => {
                        return (
                          <li key={i} className="sub_menu_item">
                            {sub}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div
        onClick={() => setNavToggle(false)}
        style={navToggle ? { display: "block" } : { display: "none" }}
        className="shadow"
      ></div>
      <div
        className={scrollTop ? "scrollTop_active scrollTop" : "scrollTop"}
        onClick={() => window.scrollTo(0, 0)}
      >
        <BsChevronUp />
      </div>
    </>
  );
};

export default Header;
