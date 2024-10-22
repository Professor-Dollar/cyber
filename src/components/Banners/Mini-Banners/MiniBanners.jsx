import styles from "./MiniBanners.module.css";
const MiniBanners = () => {
  return (
    <div className={styles.minibanners}>
      <div className={styles.leftabanners}>
        <div className={styles.widesquare}>
          <img src="/Products/playstation.png" alt="" />
          <div>
            <h1>PlayStation <span>5</span></h1>
            <p className={styles.widesquaredesc}>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className={styles.squarescontainer}>
          <div
            style={{ backgroundColor: "#EDEDED" }}
            className={styles.square1}
          >
            <img src="/Products/airpodsmax.png" alt="" />
            <div className={styles.info}>
              <h1>
                Apple
                Airpods
                <span> MAX</span>
              </h1>
              <p className={styles.desc}>
                Computational audio. Listen, its powerful
              </p>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#353535", color: "white" }}
            className={styles.square2}
          >
            <img src="/Products/visionpro.png" alt="" />
            <div className={styles.info}>
              <h1>
                Apple Vision <span>Pro</span>
              </h1>
              <p className={styles.desc}>
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#EDEDED" }}
        className={styles.largebanner}
      >
        <div className={styles.info}>
          <h1>
            Macbook
            <span> Air</span>
          </h1>
          <p className={styles.desc}>
            The new 15‑inch MacBookAir makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className={"button-outline"}>Shop now</button>
        </div>
        <img src="/Products/macbook.png" alt="" />
      </div>
    </div>
  );
};

export default MiniBanners;
