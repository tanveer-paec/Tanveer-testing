import Cards from "./Cards";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({ accountBalance, unrealizedPnL, thirtyDayGain }) => {
  return (
 
    // <div className={styles.cardsContainer}>
    //   <div className={styles.cardGrid}>
    //     <Cards accountBalance="Account Balance" dataValues={accountBalance} />
    //     <Cards accountBalance="Unrealized PnL" dataValues={unrealizedPnL} propMinWidth="280px" />
    //     <Cards accountBalance="30 Day Gain" dataValues={thirtyDayGain} propMinWidth="280px" />
    //   </div>
    // </div>
    <div className="container text-center text-white">
  <div className="row justify-content-evenly align-items-center" style={{height: "250px"}}>
    <div className=" my-auto col-auto col-md-3 border border-1 border-white rounded-2 " style={{height: "100px", backgroundColor: "var(--color-steelblue)"}}>
      <div className="my-3">Account Balance</div>
      <div className="my-2 fs-6">{accountBalance}</div>
    </div>
    <div className=" my-auto col-auto col-md-3 border border-1 border-white rounded-2 " style={{height: "100px", backgroundColor: "var(--color-steelblue)"}}>
      <div className="my-3">Unrealized PnL</div>
      <div className="my-2">{unrealizedPnL}</div>
    </div>
    <div className=" my-auto col-auto col-md-3 border border-1 border-white rounded-2 " style={{height: "100px", backgroundColor: "var(--color-steelblue)"}}>
      <div className="my-3">30 Day Gain</div>
      <div className="my-2">{thirtyDayGain}</div>
    </div>
  </div>
</div>
  );
};

export default CardsContainer;
