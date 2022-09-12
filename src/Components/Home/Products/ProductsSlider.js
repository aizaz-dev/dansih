import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "./Products.scss";
import "react-multi-carousel/lib/styles.css";
import Skeleton from "@material-ui/lab/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/actions/getProducts";
import { displayProducts } from "../../../Redux/actions/displayProductsAction";
import axios from "axios";
import ProductCard from "./ProductCard";
import { allProducts } from "../../../data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const ProductsSlider = () => {
  const prod = useSelector((state) => state.product);
  const { loading, data } = prod;
  const dispatch = useDispatch();
  dispatch(displayProducts(data));

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const Skel = () => {
    [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3].map((item, i) => {
      return (
        <div className="t_item">
          <Skeleton animation="wave" variant="rect" height={257} />

          <div style={{ height: "130px", padding: "20px 0px" }}>
            <Skeleton
              style={{ margin: "15px auto" }}
              animation="wave"
              height={10}
              width="80%"
            />
            <Skeleton
              style={{ margin: "15px auto" }}
              animation="wave"
              height={10}
              width="70%"
            />
            <Skeleton
              style={{ margin: "15px auto" }}
              animation="wave"
              height={10}
              width="60%"
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div className="Technology">
      <div className="heading">
        <h2>Most Popular</h2>
      </div>
      <div className="container">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all 4s"
          transitionDuration={5000}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px image-item"
        >
          {loading
            ? [1, 2, 3, 3, 3, 3].map((item, i) => {
                return (
                  <div key={i} className="t_item">
                    <Skeleton animation="wave" variant="rect" height={257} />

                    <div style={{ height: "130px", padding: "20px 0px" }}>
                      <Skeleton
                        style={{ margin: "15px auto" }}
                        animation="wave"
                        height={10}
                        width="80%"
                      />
                      <Skeleton
                        style={{ margin: "15px auto" }}
                        animation="wave"
                        height={10}
                        width="70%"
                      />
                      <Skeleton
                        style={{ margin: "15px auto" }}
                        animation="wave"
                        height={10}
                        width="60%"
                      />
                    </div>
                  </div>
                );
              })
            : allProducts?.map((item, i) => {
                return <ProductCard key={i} products={item} />;
              })}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductsSlider;
