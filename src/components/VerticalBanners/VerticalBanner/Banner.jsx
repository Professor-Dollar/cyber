import styles from "./Banner.module.css";
function Banner({ data }) {
  return (
    <>
    {data.map((elem, index)=>(
      <div key={index} style={{"backgroundColor":elem.bgcolor}} className={styles.banner}>
      <div className={styles.productimage}>
        <img src={elem.imagesource} />
      </div>
      <div 
      style={
        index > 1 ? {"color":"white"} : {}
      }
       className={styles.info}>
        <div className={styles.title}>{elem.title}</div>
        <div
        style={
          index > 1 ? {"color":"white"} : {}
        }
         className={styles.description}>{elem.description}
        </div>
      </div>
        <button 
        style={
          index > 1 ? {"borderColor":"white", "color":"white"} : {}
        }
        className="button-outline">Shop Now</button>
        <div className={styles.indicator}>
          <span><div className={styles.dot}></div></span>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
    </div>
    ))}
    </>
  );
}

export default Banner;
