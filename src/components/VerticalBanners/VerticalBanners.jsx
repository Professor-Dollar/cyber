import Banner from "./VerticalBanner/Banner";
import styles from "./VerticalBanners.module.css";
import data from "./data";
const VerticalBanners = () => {
  return (
    <div className={styles.verticalbanners}>
      <Banner data={data} />
    </div>
  );
};

export default VerticalBanners;