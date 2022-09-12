import React, { useEffect, useState } from "react";
import Footer from "../../Components/footer/Footer";
import Header from "../../Components/Header/Header";
import Collections from "../../Components/Home/collection/Collections";
import ProductsSlider from "../../Components/Home/Products/ProductsSlider";
import ProductsGrid from "../../Components/Home/productsGrid/ProductsGrid";
import ReactSlider from "../../Components/Home/ReactSlider/ReactSlider";
// import { doc, getDoc, getDocs, collection } from "@firebase/firestore";
import { firestore } from "../../firebase/utils";
// import { dataFetch } from "../../firebase/utils";
const Home = ({ user, name, image }) => {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  // window.addEventListener("load", () => {
  //   Fetchdata();
  // });

  // Fetch the required data using the get() method
  // const Fetchdata = () => {
  //   firestore
  //     .collection("products")
  //     .get()
  //     .then((querySnapshot) => {
  //       // Loop through the data and store
  //       // it in array to display
  //       querySnapshot.forEach((element) => {
  //         var data = element.data();
  //         setInfo((arr) => [...arr, data]);
  //         console.log(info);
  //       });
  //     });
  // };
  // useEffect(() => {
  //   Fetchdata();
  //   // dataFetch("products");
  //   // setInfo(dataFetch("products"));
  //   console.log(info);
  // }, []);
  return (
    <main>
      <Header user={user} name={name} image={image} />
      <ReactSlider />
      {/* <Collections /> */}
      <ProductsSlider />
      <ProductsGrid />
      <Footer />
    </main>
  );
};

export default Home;
