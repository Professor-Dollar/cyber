import styles from "./Banners.module.css";
import MiniBanners from "./Mini-Banners/MiniBanners";
const Banners = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannercontent}>
          <h3 className="sub-heading">Pro.Beyond.</h3>
          <h1>
            IPhone 14 <span>Pro</span>
          </h1>
          <h6>Created to change everything for the better For everyone.</h6>
          <button 
          style={{"borderColor": "white", "color":"white","maxWidth":"191px"}}
          className="button-outline">Shop Now</button>
        </div>
        <div className={styles.bannerimage}>
          <img src="/iphoneimage.png" alt="" />
        </div>
      </div>
      <MiniBanners/>
    </>
  );
};

export default Banners;
