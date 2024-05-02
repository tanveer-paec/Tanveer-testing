import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/CreateNewAccount.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import GroupComponentDashboard from "../components/dashboard/GroupComponentDashboard";
import { Slider as MuiSlider, Box } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";
import axios from "axios";
import Settings from "../components/dashboard/Settings";
import { Link } from "react-router-dom";

const CustomSlider = styled(Slider)({
  color: "primary",
});

const Dashboard1 = () => {
  const [sliderValue, setSliderValue] = useState(100);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    console.log(newValue);
  };

  const percentage = (sliderValue / 100) * 100;

  const [step, setStep] = useState(1);
  const coinStep = () => {
    setStep(3);
  };

  const mainStep = () => {
    setStep(1);
  };

  const settingsStep = () => {
    setStep(2);
  };

  return (
    <div className={styles.createNewAccount}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <section className={styles.backgroundShape} style={{ zIndex: "-1" }} />
        <Header />
        <Settings />
        <GroupComponentDashboard />
        <Footer />
      </main>
    </div>
  );
};

export default Dashboard1;
