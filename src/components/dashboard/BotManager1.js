
import 'antd/dist/reset.css';
import { Slider } from "antd"
import { Slider as MuiSlider,Box } from "@mui/material"
import GroupComponentDashboard from "./GroupComponentDashboard";
import styles from './BotManager1.module.css';


const BotManager1 = () => {
  return (
    <div className={styles.botManager}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" /><GroupComponentDashboard groupHeaderPadding="var(--padding-mid) var(--padding-81xl)" groupHeaderWidth="unset" />
        <section className={styles.content}>
          <div className={styles.heroImage} />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.userActions}>
              <div className={styles.userActionsChild} />
              <h3 className={styles.botManager1}>Bot Manager</h3>
              <img className={styles.bellIcon} loading="lazy" alt="" src="/bell.svg" />
              <div className={styles.coins}>Coins</div>
              <img className={styles.searchIcon} loading="lazy" alt="" src="/search1.svg" />
              <div className={styles.settings}>Settings</div>
              <img className={styles.homeIcon} loading="lazy" alt="" src="/home1.svg" />
              <div className={styles.main}>Main</div>
            </div>
            <h2 className={styles.botFunction}>Bot Function</h2>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.saveChanges}>Save changes</div>
            </div>
            <div className={styles.strategySelectin}>Strategy Selectin</div>
            <div className={styles.frameParent}>
              <div className={styles.longMarkupWeightParent}>
                <div className={styles.longMarkupWeight}>Long Markup Weight</div>
                <div className={styles.separatorParent}>
                  <div className={styles.separator}>150%</div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.minPriceParent}>
                        <div className={styles.minPrice} />
                        <div className={styles.maxPrice} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.randomForestParent}>
                <div className={styles.randomForest}>Random Forest</div>
                <div className={styles.separatorGroup}>
                  <div className={styles.separator1}>150%</div>
                  <div className={styles.frameContainer}>
                    <Slider className={styles.groupSlider} defaultValue={0} min={0} max={200} step={10} />
                  </div>
                </div>
              </div>
              <div className={styles.xgboostParent}>
                <div className={styles.xgboost}>XGBoost</div>
                <div className={styles.separatorContainer}>
                  <div className={styles.separator2}>150%</div>
                  <div className={styles.frameDiv}>
                    <div className={styles.groupDiv}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.minLeverageParent}>
                        <div className={styles.minLeverage} />
                        <div className={styles.maxLeverage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.longMinMarkupParent}>
                <div className={styles.longMinMarkup}>Long Min Markup</div>
                <div className={styles.separatorParent1}>
                  <div className={styles.separator3}>150%</div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.frameChild1} />
                      <div className={styles.minLongMarkupParent}>
                        <div className={styles.minLongMarkup} />
                        <div className={styles.maxLongMarkup} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shortMinMarkupParent}>
                <div className={styles.shortMinMarkup}>Short Min Markup</div>
                <div className={styles.separatorParent2}>
                  <div className={styles.separator4}>150%</div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.rectangleParent2}>
                      <div className={styles.frameChild2} />
                      <div className={styles.minShortMarkupParent}>
                        <div className={styles.minShortMarkup} />
                        <div className={styles.maxShortMarkup} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.minMarkupWeightWrapper}>
                  <div className={styles.minMarkupWeight}>Min Markup Weight</div>
                </div>
                <div className={styles.separatorWrapper}>
                  <div className={styles.separator5}>150%</div>
                </div>
                <div className={styles.frameWrapper3}>
                  <Box className={styles.wrapper}>
                    <MuiSlider color="primary" min={0} max={200} orientation="horizontal" />
                  </Box>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.priceThresholdParent}>
                <div className={styles.priceThreshold}>Price Threshold</div>
                <div className={styles.div}>150%</div>
                <div className={styles.rectangleParent3}>
                  <div className={styles.frameChild3} />
                  <div className={styles.frameChild4} />
                  <div className={styles.frameChild5} />
                </div>
              </div>
              <div className={styles.timeOffsetParent}>
                <div className={styles.timeOffset}>Time Offset</div>
                <div className={styles.div1}>150%</div>
                <Slider className={styles.frameChild6} defaultValue={0} min={0} max={200} step={10} style={{ width: 180 }} />
              </div>
              <div className={styles.leverageParent}>
                <div className={styles.leverage}>Leverage</div>
                <div className={styles.div2}>150%</div>
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild7} />
                  <div className={styles.frameChild8} />
                  <div className={styles.frameChild9} />
                </div>
              </div>
              <div className={styles.wvmaWeightParent}>
                <div className={styles.wvmaWeight}>WVMA Weight</div>
                <div className={styles.div3}>150%</div>
                <div className={styles.rectangleParent5}>
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild11} />
                  <div className={styles.frameChild12} />
                </div>
              </div>
              <div className={styles.emaWeightParent}>
                <div className={styles.emaWeight}>EMA Weight</div>
                <div className={styles.div4}>150%</div>
                <div className={styles.rectangleParent6}>
                  <div className={styles.frameChild13} />
                  <div className={styles.frameChild14} />
                  <div className={styles.frameChild15} />
                </div>
              </div>
              <div className={styles.walletRiskParent}>
                <div className={styles.walletRisk}>Wallet Risk</div>
                <div className={styles.div5}>150%</div>
                <Box className={styles.container} sx={{ width: 180 }}>
                  <MuiSlider color="primary" min={0} max={200} orientation="horizontal" />
                </Box>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>);
};

export default BotManager1;
