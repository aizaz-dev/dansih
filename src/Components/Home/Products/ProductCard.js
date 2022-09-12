import { BsCart2 } from "react-icons/bs";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { addCart } from "../../../Redux/actions/addCart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Products.scss";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const addToCart = (pro) => {
    dispatch(addCart(pro));
  };

  const handleProdDetail = (prod) => {
    Navigate(`/product/${prod.id}`);

    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="t_item">
        <div className="t_image">
          <img src={products.imgUrl} alt="" className="t_image_img" />
          <div className="t_btns">
            <div className="t_btn1" onClick={() => addToCart(products)}>
              <div className="t_btn1_btn">Add to Cart</div>
              <div className="t_btn1_btn_eff">
                <BsCart2 />
              </div>
            </div>
            <div className="t_btn2">
              <div className="t_btn1_btn">Buy Now</div>
              <div className="t_btn1_btn_eff">
                <BiPurchaseTagAlt />
              </div>
            </div>
          </div>
        </div>
        <div className="t_text" onClick={() => handleProdDetail(products)}>
          <div className="type">{products.category}</div>
          <div className="title">{products.name.substr(0, 42)}</div>
          <div className="price">
            <div className="previous_price">${products.price +8}</div>
            <div className="discount_price">${products.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
