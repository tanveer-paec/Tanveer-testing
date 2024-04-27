import GroupComponentDashboard from "./GroupComponentDashboard";
import styles from "./BotManager2.module.css";

const BotManager2 = () => {
  return (
    <div className={styles.botManager}>
      <main className={styles.parent}>
        <img className={styles.icon} alt="" src="/1-5@2x.png" />
        <GroupComponentDashboard
          groupHeaderPadding="var(--padding-mid) var(--padding-81xl)"
          groupHeaderWidth="unset"
        />
        <section className={styles.content}>
          <div className={styles.banner} />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.botManager1}>Bot Manager</div>
            <img
              className={styles.bellIcon}
              loading="lazy"
              alt=""
              src="/bell1.svg"
            />
            <div className={styles.coins}>Coins</div>
            <img
              className={styles.searchIcon}
              loading="lazy"
              alt=""
              src="/search.svg"
            />
            <div className={styles.settings}>Settings</div>
            <img
              className={styles.homeIcon}
              loading="lazy"
              alt=""
              src="/home1.svg"
            />
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.main}>Main</div>
            <h3 className={styles.coinsActive}>Coins Active</h3>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <div className={styles.saveChanges}>Save changes</div>
            </div>
            <input className={styles.controlElements} type="checkbox" />
            <div className={styles.shiba}>SHIBA</div>
            <input className={styles.controlElements1} type="checkbox" />
            <div className={styles.doge}>DOGE</div>
            <input className={styles.controlElements2} type="checkbox" />
            <div className={styles.shiba1}>SHIBA</div>
            <input className={styles.controlElements3} type="checkbox" />
            <div className={styles.shiba2}>SHIBA</div>
            <input className={styles.controlElements4} type="checkbox" />
            <div className={styles.shiba3}>SHIBA</div>
            <input className={styles.controlElements5} type="checkbox" />
            <div className={styles.shiba4}>SHIBA</div>
            <input className={styles.controlElements6} type="checkbox" />
            <div className={styles.coin1}>COIN1</div>
            <input className={styles.controlElements7} type="checkbox" />
            <div className={styles.from}>FROM</div>
            <input className={styles.controlElements8} type="checkbox" />
            <div className={styles.shiba5}>SHIBA</div>
            <input className={styles.controlElements9} type="checkbox" />
            <div className={styles.shiba6}>SHIBA</div>
            <input className={styles.controlElements10} type="checkbox" />
            <div className={styles.shiba7}>SHIBA</div>
            <input className={styles.controlElements11} type="checkbox" />
            <div className={styles.shiba8}>SHIBA</div>
            <input className={styles.controlElements12} type="checkbox" />
            <div className={styles.yaml}>YAML</div>
            <input className={styles.controlElements13} type="checkbox" />
            <div className={styles.file}>FILE</div>
            <input className={styles.controlElements14} type="checkbox" />
            <div className={styles.shiba9}>SHIBA</div>
            <input className={styles.controlElements15} type="checkbox" />
            <div className={styles.shiba10}>SHIBA</div>
            <input className={styles.controlElements16} type="checkbox" />
            <div className={styles.shiba11}>SHIBA</div>
            <input className={styles.controlElements17} type="checkbox" />
            <div className={styles.shiba12}>SHIBA</div>
            <input className={styles.controlElements18} type="checkbox" />
            <div className={styles.on}>ON</div>
            <input className={styles.controlElements19} type="checkbox" />
            <div className={styles.server}>SERVER</div>
            <input className={styles.controlElements20} type="checkbox" />
            <div className={styles.shiba13}>SHIBA</div>
            <input className={styles.controlElements21} type="checkbox" />
            <div className={styles.shiba14}>SHIBA</div>
            <input className={styles.controlElements22} type="checkbox" />
            <div className={styles.shiba15}>SHIBA</div>
            <input className={styles.controlElements23} type="checkbox" />
            <div className={styles.shiba16}>SHIBA</div>
            <input className={styles.controlElements24} type="checkbox" />
            <div className={styles.shiba17}>SHIBA</div>
            <input className={styles.controlElements25} type="checkbox" />
            <div className={styles.shiba18}>SHIBA</div>
            <input className={styles.controlElements26} type="checkbox" />
            <div className={styles.shiba19}>SHIBA</div>
            <input className={styles.controlElements27} type="checkbox" />
            <div className={styles.shiba20}>SHIBA</div>
            <div className={styles.controlElements28} />
            <div className={styles.shiba21}>SHIBA</div>
            <div className={styles.controlElements29} />
            <div className={styles.shiba22}>SHIBA</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BotManager2;
