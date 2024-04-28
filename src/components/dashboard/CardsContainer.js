import Cards from "./Cards";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({ accountBalance, unrealizedPnL, thirtyDayGain }) => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardGrid}>
        <Cards accountBalance="Account Balance" dataValues={accountBalance} />
        <Cards accountBalance="Unrealized PnL" dataValues={unrealizedPnL} propMinWidth="280px" />
        <Cards accountBalance="30 Day Gain" dataValues={thirtyDayGain} propMinWidth="280px" />
      </div>
    </div>
  );
};

export default CardsContainer;
