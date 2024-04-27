import Cards from "./Cards";
import styles from "./CardsContainer.module.css";

const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardGrid}>
        <Cards accountBalance="Account Balance" dataValues="$45,678.90" />
        <Cards
          accountBalance="Unrealized PnL"
          dataValues="$-878.20"
          propMinWidth="280px"
        />
        <Cards
          accountBalance="30 Day Gain"
          dataValues="$5,327.44"
          propMinWidth="280px"
        />
      </div>
    </div>
  );
};

export default CardsContainer;
