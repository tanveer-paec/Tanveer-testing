import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import GroupComponentDashboard from "../components/dashboard/GroupComponentDashboard";
import CardsContainer from "../components/dashboard/CardsContainer";
import styles from "./css/Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <section className={styles.headerGraphics} GF />
      </main>
      <GroupComponentDashboard />
      <div className={styles.mainContent}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <CardsContainer />
          <div className={styles.tagParent}>
            <Button className={styles.tag} name="REPORT" variant="primary">
              REPORT
            </Button>
            <b className={styles.tagValue}>
              <p className={styles.p}>
                +--------------------+-------+-----------+---------------+----------------+----------+--------------------+
              </p>
              <p className={styles.symbol}>
                | Symbol | Side | Contracts | Entry Price | Unrealized PnL |
                Leverage | Daily Realized PnL |
              </p>
              <p className={styles.p1}>
                +--------------------+-------+-----------+---------------+----------------+----------+--------------------+
              </p>
              <p className={styles.galausdtusdt}>
                | GALA/USDT:USDT | long | 7.0 | 0.03148 | -0.00287 | 25.0 |
                0.0007 |
              </p>
              <p className={styles.apeusdtusdt}>
                | APE/USDT:USDT | long | 0.1 | 1.671 | -0.00113 | 25.0 | 0.0005
                |
              </p>
              <p className={styles.alphausdtusdt}>
                | ALPHA/USDT:USDT | long | 5.0 | 0.13217 | -0.0086 | 10.0 |
                0.0048 |
              </p>
              <p className={styles.opusdtusdt}>
                | OP/USDT:USDT | long | 0.2 | 3.83310743 | 0.00827851 | 25.0 |
                0.0048 |
              </p>
              <p className={styles.injusdtusdt}>
                | INJ/USDT:USDT | long | 4.4 | 41.39909091 | -18.872 | 25.0 |
                0.2315 |
              </p>
              <p className={styles.pepeusdtusdt}>
                | 1000PEPE/USDT:USDT | long | 100.0 | 0.001 | 0.03364 | 10.0 |
                0.0001 |
              </p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
