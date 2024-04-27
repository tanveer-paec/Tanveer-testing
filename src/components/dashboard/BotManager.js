import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import GroupComponentDashboard from "./GroupComponentDashboard";
import styles from "./BotManager.module.css";

const BotManager = () => {
  return (
    <div className={styles.botManager}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <GroupComponentDashboard
          groupHeaderPadding="var(--padding-mid) var(--padding-81xl)"
          groupHeaderWidth="unset"
        />
        <section className={styles.pageBody}>
          <div className={styles.heroImage} />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.header}>
              <div className={styles.headerChild} />
              <h3 className={styles.botManager1}>Bot Manager</h3>
              <img
                className={styles.bellIcon}
                loading="lazy"
                alt=""
                src="/bell.svg"
              />
              <button className={styles.coins}>Coins</button>
              <img
                className={styles.searchIcon}
                loading="lazy"
                alt=""
                src="/search.svg"
              />
              <button className={styles.settings}>Settings</button>
              <img
                className={styles.homeIcon}
                loading="lazy"
                alt=""
                src="/home.svg"
              />
              <button className={styles.main}>Main</button>
            </div>
            <form className={styles.form}>
              <div className={styles.input}>
                <div className={styles.botOperation}>Bot Operation</div>
              </div>
              <DropdownButton
                className={styles.dropdown}
                title="On"
                variant="primary"
                size="sm"
              >
                <Dropdown.Item>On</Dropdown.Item>
                <Dropdown.Item>Off</Dropdown.Item>
              </DropdownButton>
              <div className={styles.inputList}>
                <div className={styles.pauseNewOrders}>Pause New Orders</div>
                <DropdownButton
                  className={styles.field}
                  title="Off"
                  variant="primary"
                  align="start"
                  size="sm"
                >
                  <Dropdown.Item>On</Dropdown.Item>
                  <Dropdown.Item>Off</Dropdown.Item>
                </DropdownButton>
              </div>
              <button className={styles.button}>
                <div className={styles.saveChanges}>Save changes</div>
              </button>
            </form>
            <h2 className={styles.mainSettings}>Main Settings</h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BotManager;
