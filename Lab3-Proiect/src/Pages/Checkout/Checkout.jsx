import React from "react";
import styles from "./Checkout.module.css";
import Header from "../../components/Header/Header";

const checkoutItems = [
  { id: 1, name: "Black and Gray Athletic Cotton Socks - 6 Pairs", priceCents: 1090 },
  { id: 2, name: "Intermediate Size Basketball", priceCents: 2095 },
];

const Checkout = ({ onNavigate }) => {
  const totalCents = checkoutItems.reduce((sum, item) => sum + item.priceCents, 0);

  return (
    <div>
      <Header onNavigate={onNavigate} />

      <div className={styles.main}>
        <div className={styles.pageTitle}>Review your order</div>

        <div className={styles.checkoutGrid}>
          <div className={styles.orderSummary}>
            {checkoutItems.map((item) => (
              <div key={item.id} className={styles.checkoutItem}>
                <div className={styles.checkoutItemName}>{item.name}</div>
                <div className={styles.checkoutItemPrice}>
                  ${(item.priceCents / 100).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.paymentSummary}>
            <div className={styles.totalLabel}>Total:</div>
            <div className={styles.totalPrice}>${(totalCents / 100).toFixed(2)}</div>

            <button className={styles.payButton}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;