import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/CreateNewAccount.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import GroupComponentDashboard from "../components/dashboard/GroupComponentDashboard";
import CardsContainer from "../components/dashboard/CardsContainer";
//import styles from "./css/Dashboard.module.css";
import axios from "axios";

const Dashboard1 = () => {
  return (
    <div className={styles.createNewAccount}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <section className={styles.backgroundShape} />
        <Header />
      
      <GroupComponentDashboard />


        <Footer />
      </main>
    </div>
  );
};

export default Dashboard1;

