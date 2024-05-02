import { useMemo } from "react";
//import styles from "./GroupComponentDashboard.module.css";
import CardsContainer from "./CardsContainer";
import styles from "../../pages/css/Dashboard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const GroupComponentDashboard = ({ groupHeaderPadding, groupHeaderWidth }) => {
  const [userData, setUserData] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  //let email = "";

  useEffect(() => {
    // Fetch user information and dashboard data from the backend API
    const fetchDashboardData = async () => {
      const accessToken = sessionStorage.getItem("accessToken");
      if (!accessToken) {
        // If access token is not available, wait and retry after 1 second
        setTimeout(fetchDashboardData, 1000);
        return;
      }
      try {
        // Make a POST request to fetch user information
        console.log(accessToken);
        const userResponse = await axios.get(
          `http://127.0.0.1:8000/verify_t/${accessToken}/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Make a POST request to fetch dashboard data
        const dashboardResponse = await axios.post(
          "http://localhost:8000/dashboard/",
          {
            email: userResponse.data.email,
            username: userResponse.data.username,
          }
        );

        // Set user information and dashboard data in state
        setUserData(userResponse.data);
        //email = userData.email
        console.log(userData);

        setDashboardData(dashboardResponse.data);
        console.log(`sss ${dashboardResponse.data}`);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const groupHeaderStyle = useMemo(() => {
    return {
      padding: groupHeaderPadding,
      width: groupHeaderWidth,
    };
  }, [groupHeaderPadding, groupHeaderWidth]);

  return (
    <>
<<<<<<< Updated upstream
      <div
        className="text-white text-center mx-auto"
        style={{ marginTop: "-40px" }}
      >
        <h1>Welcome to the Dashboard {userData?.[1] ?? ""}</h1>
      </div>
      <div
        className="container border"
        style={{
          borderRadius: "var(--br-mini)",
          backgroundColor: "var(--color-gray-200)",
          border: "2px solid var(--color-cadetblue-200) !important",
        }}
      >
        <CardsContainer
          accountBalance={dashboardData ? dashboardData[0] : "---"}
          unrealizedPnL={dashboardData ? dashboardData[1] : "---"}
          thirtyDayGain={dashboardData ? dashboardData[2] : "---"}
          tableData={dashboardData ? dashboardData[3] : []}
        />
        <div className="container mb-4">
          <Button className={styles.tag} name="REPORT" variant="primary">
            REPORT
          </Button>
        </div>

        <div className="container">
          <div className="table-responsive">
            <table className="table">
=======
    <div className="text-white text-center mx-auto" style={{marginTop: "-120px"}}><h1>Welcome to the Dashboard {userData?.[1] ?? ""}</h1></div>
    <div className="container border" style={{borderRadius: "var(--br-mini)",
  backgroundColor: "var(--color-gray-200)", border: "2px solid var(--color-cadetblue-200) !important"}}>
      <CardsContainer
        accountBalance={dashboardData?.[0] ?? ''}
        unrealizedPnL={dashboardData?.[1] ?? ''}
        thirtyDayGain={dashboardData?.[2] ?? ''}
        tableData={dashboardData?.[3] ?? []}
        // accountBalance={10000}
        // unrealizedPnL={47000}
        // thirtyDayGain={25000}
        // tableData={15000}
      />
      <div className="container mb-4">
        <Button className={styles.tag} name="REPORT" variant="primary">
          REPORT
        </Button>
        {/* <div className="container border">
<div className="table-responsive">
            <table>
>>>>>>> Stashed changes
              <thead>
                <tr>
                  <th scope="col">Symbol</th>
                  <th scope="col">Side</th>
                  <th scope="col">Number of Contracts</th>
                  <th scope="col">Entry Price</th>
                  <th scope="col">UPNL</th>
                  <th scope="col">Leverage</th>
                  <th scope="col">Daily Realized PnL</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData && dashboardData[3] ? (
                  dashboardData[3].map((item, index) => (
                    <tr key={index}>
                      <td>{item.symbol}</td>
                      <td>{item.side}</td>
                      <td>{item.num_of_contracts}</td>
                      <td>{item.entry_price}</td>
                      <td>{item.upnl}</td>
                      <td>{item.leverage}</td>
                      <td>{item.daily_realized_pnl}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      style={{ textAlign: "center", fontSize: "1.5em" }}
                    >
                      Loading...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupComponentDashboard;
