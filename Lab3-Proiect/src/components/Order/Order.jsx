import React from "react";
import styles from "./Order.module.css";

const Order = ({ order }) => {
  return (
    <div className={styles.orderContainer}>
      <div className={styles.orderDate}>Order Date: {order.date}</div>

      <div className={styles.orderItems}>
        {order.items.map((item) => (
          <div key={item.id} className={styles.orderItem}>
            <div className={styles.orderItemName}>{item.name}</div>
            <div className={styles.orderItemPrice}>
              ${(item.priceCents / 100).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.orderTotal}>
        Total: ${(order.totalCents / 100).toFixed(2)}
      </div>
    </div>
  );
};

export default Order;