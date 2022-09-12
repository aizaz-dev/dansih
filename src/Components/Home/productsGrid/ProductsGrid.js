import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { displayProducts } from "../../../Redux/actions/displayProductsAction";
import { getProduct } from "../../../Redux/actions/getProducts";
import ProductCard from "../Products/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import "./productGrid.scss";
import Typography from "@material-ui/core/Typography";
import { filterProducts } from "../../../Redux/actions/filterProduct";
import { allProducts } from "../../../data";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const ProductsGrid = () => {
  const prod = useSelector((state) => state.displayGrid.displayProducts);
  const products = useSelector((state) => state.product);
  const filterProductss = useSelector((state) => state.filterData);

  const { data, loading } = filterProductss;
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [page, setPage] = useState(0);
  const [cat, setCat] = useState();
  const dispatch = useDispatch();
  const cata = products.data.map((ite) => {
    return ite.category;
  });
  const filterCategory = [...new Set(cata), "All"];
  window.addEventListener("onload", () => {
    setFilteredProducts(allProducts);
  });
  function setDetail(c) {
    // setCat(c);
    // dispatch(filterProducts(c));
    setFilteredProducts(
      allProducts.filter((item) => {
        if (c == "All") {
          return item;
        }
        return item.category == c;
      })
    );
  }
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    dispatch(getProduct());
    dispatch(filterProducts());
  }, [dispatch]);
  const classes = useStyles();
  const uniqueVal = [
    "All",
    ...new Set(allProducts.map((item) => item.category)),
  ];

  const Skel = () => {
    return (
      <div className="grid">
        {[1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3].map((item, i) => {
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
        })}
      </div>
    );
  };

  return (
    <>
      <section className="products__grid">
        <div className="container">
          <div className="heading">
            <h2>New Products</h2>
            <ul>
              {uniqueVal.map((item, i) => {
                return (
                  <li
                    style={
                      cat === item
                        ? { background: "#AD1B3C", color: "#fff" }
                        : {}
                    }
                    onClick={() => setDetail(item)}
                    key={i}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          {loading ? (
            <Skel />
          ) : (
            <div className="grid">
              {filteredProducts.map((item, ind) => {
                return <ProductCard key={ind} products={item} />;
              })}
            </div>
          )}
          <div className="pagination">
            <div className={classes.root}>
              <Pagination
                count={10}
                page={page}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
                defaultPage={1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsGrid;
