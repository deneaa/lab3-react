import React from "react";
import products from "../../data/products.json";
import styles from "./Dashboard.module.css";
import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";

const Dashboard = ({goToPage}) => {
  return (
    <div>
      <Header onNavigate={goToPage} />
      <div className={styles.main}>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;