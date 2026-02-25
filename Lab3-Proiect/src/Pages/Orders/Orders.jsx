import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Orders.module.css";
import Order from "../../components/Order/Order";

const ordersData = [
  {
    id: 1,
    date: "Feb 15, 2026",
    items: [
      { id: 1, name: "Black and Gray Athletic Cotton Socks - 6 Pairs", priceCents: 1090 },
      { id: 2, name: "Intermediate Size Basketball", priceCents: 2095 },
    ],
    totalCents: 3185,
  },
  {
    id: 2,
    date: "Feb 20, 2026",
    items: [
      { id: 3, name: "Red Sports T-Shirt", priceCents: 1599 },
    ],
    totalCents: 1599,
  },
];

const Orders = ({ goToPage }) => {
  return (
    <div>
      <Header onNavigate={goToPage} />

      <div className={styles.main}>
        <div className={styles.pageTitle}>Your Orders</div>

        <div className={styles.ordersGrid}>
          {ordersData.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;