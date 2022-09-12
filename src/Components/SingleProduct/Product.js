import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QuantityPicker } from "react-qty-picker";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import SimpleAccordion from "../Home/UI/Accordian";
import { Tabs } from "@mui/material";
import { addCart } from "../../Redux/actions/addCart";
import BasicTabs from "../Home/UI/Tabs";
import { images } from "../../assets/data";
import { getProdDetails } from "../../Redux/actions/getProdDetails";
import { removeSelectedProd } from "../../Redux/actions/getProdDetails";
import { Skeleton } from "@material-ui/lab";
import { allProducts } from "../../data";

const Product = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [imgStyle, setimgStyle] = useState({});
  const [singleProducts, setSingleProducts] = useState(null);
  const [size, setSize] = useState();
  const specific = useSelector((state) => state.uniqueDetail);
  const { data, loading } = specific;

  const addToCart = (pro) => {
    Navigate(`/`);
  };
  const handleGalleryImg = (i, e) => {
    setCurrentImg(i);
  };
  useEffect(() => {
    if (id) {
      dispatch(getProdDetails(id));
    }
    return () => {
      dispatch(removeSelectedProd());
    };
  }, [dispatch, id]);
  const getSize = (s) => {
    setSize(s);
  };
  useEffect(() => {
    setSingleProducts(
      allProducts.find((single) => {
        console.log(single.id, id);
        return single.id == id;
      })
    );
  });
  console.log(singleProducts, "SingleProduct");
  return (
    <>
      {loading ? (
        <section className="prod__info">
          <div className="container">
            <div className="grid">
              <div className="item">
                <div className="img">
                  <Skeleton
                    animation="wave"
                    style={{
                      height: "100%",
                      width: "100%",
                      transform: "unset",
                    }}
                  />
                </div>
                <div className="related_imges" style={{ gap: "unset" }}>
                  <Skeleton
                    animation="wave"
                    style={{ height: "110px", width: "70px" }}
                  />
                  <Skeleton
                    animation="wave"
                    style={{ height: "110px", width: "70px" }}
                  />
                  <Skeleton
                    animation="wave"
                    style={{ height: "110px", width: "70px" }}
                  />
                  <Skeleton
                    animation="wave"
                    style={{ height: "110px", width: "70px" }}
                  />
                </div>
              </div>
              <div className="item">
                <Skeleton height="40px" animation="wave" />
                <Skeleton height="40px" animation="wave" width="80%" />

                <Skeleton height="30px" animation="wave" width="30%" />
                <div style={{ display: "flex", gap: "10px" }}>
                  <Skeleton height="50px" animation="wave" width="80%" />
                  <Skeleton height="50px" animation="wave" width="80%" />
                </div>
                <Skeleton height="30px" animation="wave" width="80%" />
                <Skeleton height="30px" animation="wave" width="80%" />
                <Skeleton height="70px" animation="wave" width="100%" />
                <div
                  className="detail"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <Skeleton height="20px" animation="wave" width="10%" />
                  <Skeleton height="20px" animation="wave" width="10%" />
                </div>
                <Skeleton
                  height="2px"
                  style={{ marginBottom: "20px" }}
                  animation="wave"
                  width="100%"
                />
                <Skeleton
                  style={{ marginBottom: "5px" }}
                  height="20px"
                  animation="wave"
                  width="100%"
                />
                <Skeleton
                  style={{ marginBottom: "5px" }}
                  height="20px"
                  animation="wave"
                  width="90%"
                />
                <Skeleton
                  style={{ marginBottom: "5px" }}
                  height="20px"
                  animation="wave"
                  width="80%"
                />
                <Skeleton
                  style={{ marginBottom: "5px" }}
                  height="20px"
                  animation="wave"
                  width="70%"
                />
              </div>
            </div>
            <div className="tabs__info">{/* <BasicTabs /> */}</div>
          </div>
        </section>
      ) : (
        <section className="prod__info">
          <div className="container">
            <div className="grid">
              <div className="item" style={{ display: "none" }}>
                <div className="img">
                  <img src={singleProducts?.imgUrl} alt="az" />
                </div>
                <div className="related_imges"></div>
              </div>
              <div className="item">
                <div className="top__detail">
                  <div className="title">
                    <h2>{singleProducts?.name}</h2>
                    <div>
                      <span>Brand:</span>
                      {singleProducts?.category}
                    </div>
                  </div>
                  <div className="price">
                    <h2></h2>
                    <h2>${singleProducts?.price}</h2>
                  </div>
                </div>
                <div className="quantity">
                  <div className="qty">
                    <div>Quantity:</div> <QuantityPicker min={1} max={4} />
                  </div>
                  <div className="size">
                    <div>Size:</div>
                    <ul>
                      {[2, 3, 4, 5, 6, 7, 8].map((ite, i) => {
                        return (
                          <li
                            key={i}
                            className={size === ite ? "active__size" : ""}
                            style={
                              size === ite
                                ? { background: "black", color: "#fff" }
                                : {}
                            }
                            onClick={() => getSize(ite)}
                          >
                            {ite}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="buy"></div>
                </div>
                <div className="add_to_cart" onClick={() => addToCart(data)}>
                  <button>Add To Cart</button>
                </div>
                <div className="description">
                  <SimpleAccordion des={singleProducts?.about} />
                </div>
              </div>
            </div>
            <div className="tabs__info">{/* <BasicTabs /> */}</div>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
