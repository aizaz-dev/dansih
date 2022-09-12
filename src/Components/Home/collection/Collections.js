import React from "react";
import "./collection.scss";
import { collection } from "../../../assets/data";
const Collections = () => {
  return (
    <>
      <section className="collection">
        <div className="container">
          <div className="heading">
            <h2>Collections</h2>
          </div>
          <div className="grid">
            {collection.map((item, i) => {
              return (
                <div key={i} className="item">
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="content">
                    <h2>
                      {item.name} <br /> Collection
                    </h2>
                    <button>Shop Now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;
