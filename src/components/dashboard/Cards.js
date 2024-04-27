import { useMemo } from "react";
import styles from "./Cards.module.css";

const Cards = ({ accountBalance, dataValues, propMinWidth }) => {
  const cardsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.cards} style={cardsStyle}>
      <div className={styles.card}>
        <div className={styles.accountBalance}>{accountBalance}</div>
        <div className={styles.dataValues}>{dataValues}</div>
      </div>
    </div>
  );
};

export default Cards;
