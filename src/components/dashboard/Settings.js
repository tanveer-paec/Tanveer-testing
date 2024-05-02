import React from 'react'
import { useState, useEffect } from "react";
// import styles from "./css/CreateNewAccount.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Slider as MuiSlider, Box } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "@mui/material/Slider";
import { Link } from "react-router-dom";

const CustomSlider = styled(Slider)({
  color: "primary",
});


function Settings() {

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
    <div>
      {/* Modal  */}
      <div
          className="modal fade my-auto"
          id="dashboardModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "850px" }}
          >
            <div
              className="modal-content text-white my-auto"
              style={{
                backgroundColor: "var(--color-gray-200)",
                height: "610px",
              }}
            >
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalLabel">
                  Settings
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-md-row flex-column align-items-center align-items-md-start">
                <div
                  id="iconDiv"
                  className="rounded-2"
                  style={{ width: "300px" }}
                >
                  <div
                    className="my-4 fs-5 text-center"
                    style={{ width: "150px" }}
                  >
                    Bot Manager
                  </div>
                  <div
                    className="d-flex flex-row justify-content-center"
                    onClick={mainStep}
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <img loading="lazy" alt="" src="/home.svg" />
                    </div>
                    <div className="mx-2 my-auto">
                      <a>Main</a>
                    </div>
                  </div>

                  <div
                    className="d-flex flex-row justify-content-center my-4"
                    onClick={settingsStep}
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <img loading="lazy" alt="" src="/search.svg" />
                    </div>
                    <div className="mx-2 my-auto">
                      <a>Search</a>
                    </div>
                  </div>

                  <div
                    id="coin"
                    onClick={coinStep}
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-row justify-content-center"
                  >
                    <div>
                      <img loading="lazy" alt="" src="/bell.svg" />
                    </div>
                    <div className="mx-2 my-auto">
                      <div>Coins</div>
                    </div>
                  </div>
                </div>
                {step === 1 && (
                  <div
                    className="container border-start"
                    style={{ borderColor: "blue" }}
                  >
                    <div className="mt-5 pt-4 ps-md-3">
                      {" "}
                      <div className="mb-3">
                        <h4>Main Settings</h4>
                      </div>
                      <div className="py-3">Bot Operation</div>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          style={{
                            width: "200px",
                            backgroundColor: "transparent",
                          }}
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          On
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li>
                            <a className="dropdown-item" href="#">
                              On
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Off
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="py-3">Pause New Orders</div>
                      <div style={{ width: "80px" }}>
                        <div className="dropdown pb-2 mb-2">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            style={{
                              width: "200px",
                              backgroundColor: "transparent",
                            }}
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Off
                          </button>
                          <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                              <Link className="dropdown-item " href="#">
                                On
                              </Link>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Off
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mb-5 pb-5 mt-4">
                        {/* <button
                          type="button"
                          style={{
                            width: "200px",
                            backgroundColor: "transparent",
                          }}
                          className="btn btn-secondary"
                        >
                          Save Changes
                        </button> */}
                      </div>
                    </div>
                  </div>
                )}
                {/* settings window starts */}

                {step === 2 && (
                  <div
                    className="container border-start"
                    style={{ borderColor: "blue" }}
                  >
                    <div className="mt-5 pt-4 ps-md-3">
                      {" "}
                      <div className="mb-3">
                        <h4>Bot Function</h4>
                      </div>
                      <div className="py-3">Strategy Selection</div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-start">
                          <div className="">Wallet Risk</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                value={sliderValue}
                                onChange={handleSliderChange}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">{`${percentage}%`}</div>{" "}
                        </div>

                        <div className="d-flex flex-row align-items-start">
                          <div className="">Random Forest</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                value={50}
                                // onChange={()=>{ value =1}}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">50%</div>{" "}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-2">
                        <div className="d-flex flex-row align-items-start">
                          <div className="">EMA Weight</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                // value={sliderValue}
                                // onChange={handleSliderChange}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">0%</div>{" "}
                        </div>

                        <div className="d-flex flex-row align-items-start">
                          <div className="">XGBOOST</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                value={50}
                                // onChange={()=>{ value =1}}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">50%</div>{" "}
                        </div>
                      </div>


                      <div className="d-flex justify-content-between mt-2">
                        <div className="d-flex flex-row align-items-start">
                          <div className="">EMA Weight</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                // value={sliderValue}
                                // onChange={handleSliderChange}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">0%</div>{" "}
                        </div>

                        <div className="d-flex flex-row align-items-start">
                          <div className="">XGBOOST</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                value={50}
                                // onChange={()=>{ value =1}}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">50%</div>{" "}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-2">
                        <div className="d-flex flex-row align-items-start">
                          <div className="">EMA Weight</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                // value={sliderValue}
                                // onChange={handleSliderChange}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">0%</div>{" "}
                        </div>

                        <div className="d-flex flex-row align-items-start">
                          <div className="">XGBOOST</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                value={50}
                                // onChange={()=>{ value =1}}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">50%</div>{" "}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-2">
                        <div className="d-flex flex-row align-items-start">
                          <div className="">EMA Weight</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                // value={sliderValue}
                                // onChange={handleSliderChange}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">0%</div>{" "}
                        </div>

                        <div className="d-flex flex-row align-items-start">
                          <div className="">XGBOOST</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                value={50}
                                // onChange={()=>{ value =1}}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">50%</div>{" "}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-2">
                        <div className="d-flex flex-row align-items-start">
                          <div className="">EMA Weight</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                // value={sliderValue}
                                // onChange={handleSliderChange}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">0%</div>{" "}
                        </div>

                        <div className="d-flex flex-row align-items-start">
                          <div className="">XGBOOST</div>
                          <div className="mx-3">
                            <Box className="" sx={{ width: 100 }}>
                              {/* <MuiSlider color="primary" min={0} max={200} orientation="horizontal" /> */}
                              <CustomSlider
                                value={50}
                                // onChange={()=>{ value =1}}
                                min={0}
                                max={100}
                                orientation="horizontal"
                              />
                            </Box>{" "}
                          </div>
                          <div className="">50%</div>{" "}
                        </div>
                      </div>






















































































                    </div>
                  </div>
                )}

                {/* coins window starts */}

                {step === 3 && (
                  <div
                    className="container border-start"
                    style={{ borderColor: "blue" }}
                  >
                    <div className="mt-5 pt-4 ps-md-3">
                      <div className="mb-3 border-bottom ">
                        <h5>Coins Active</h5>
                      </div>
                      <div className="mt-2">
                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox1"
                          >
                            SHIBA
                          </label>
                        </div>
                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            COIN1
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            YAML
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox3"
                          >
                            ON
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            SHIBA
                          </label>
                        </div>
                      </div>

                      <div className="my-4">
                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox1"
                          >
                            SHIBA
                          </label>
                        </div>
                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            COIN1
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            YAML
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox3"
                          >
                            ON
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            SHIBA
                          </label>
                        </div>
                      </div>

                      <div className="my-4">
                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox1"
                          >
                            SHIBA
                          </label>
                        </div>
                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            COIN1
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            YAML
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox3"
                          >
                            ON
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            SHIBA
                          </label>
                        </div>
                      </div>
                      <div className="my-4">
                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox1"
                          >
                            SHIBA
                          </label>
                        </div>
                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            COIN1
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            YAML
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            value="option3"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox3"
                          >
                            ON
                          </label>
                        </div>

                        <div className="form-check form-check-inline me-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            for="inlineCheckbox2"
                          >
                            SHIBA
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* coins modal ends here */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Settings
