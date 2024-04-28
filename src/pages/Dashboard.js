import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import GroupComponentDashboard from "../components/dashboard/GroupComponentDashboard";
import CardsContainer from "../components/dashboard/CardsContainer";
import styles from "./css/Dashboard.module.css";
import axios from "axios";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    // Fetch user information and dashboard data from the backend API
    const fetchDashboardData = async () => {
      try {
        // Make a POST request to fetch user information
        const accessToken = sessionStorage.getItem('accessToken');
        console.log(accessToken)
        const userResponse = await axios.get(`http://127.0.0.1:8000/verify_t/${accessToken}/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        // Make a POST request to fetch dashboard data
        const dashboardResponse = await axios.post('http://localhost:8000/dashboard/', {
          email: userResponse.data.email,
          username: userResponse.data.username
        });

        // Set user information and dashboard data in state
        setUserData(userResponse.data);
        setDashboardData(dashboardResponse.data);
        console.log(`sss ${dashboardResponse.data}`)
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

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
          <CardsContainer
            accountBalance={dashboardData?.[0] ?? ''}
            unrealizedPnL={dashboardData?.[1] ?? ''}
            thirtyDayGain={dashboardData?.[2] ?? ''}
            tableData={dashboardData?.[3] ?? []}
          />
          <div className={styles.tagParent}>
            <Button className={styles.tag} name="REPORT" variant="primary">
              REPORT
            </Button>

            <table className={styles.table} border="0">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Side</th>
                  <th>Number of Contracts</th>
                  <th>Entry Price</th>
                  <th>UPNL</th>
                  <th>Leverage</th>
                  <th>Daily Realized PnL</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData?.[3]?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.symbol}</td>
                    <td>{item.side}</td>
                    <td>{item.num_of_contracts}</td>
                    <td>{item.entry_price}</td>
                    <td>{item.upnl}</td>
                    <td>{item.leverage}</td>
                    <td>{item.daily_realized_pnl}</td>
                  </tr>
                ))}
              </tbody>
            </table>


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
