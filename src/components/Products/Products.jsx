import Card from "../DiscountedProducts/Card/Card";
import products from './ProductsData';
import styles from "./Products.module.css";
function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.productsnavigation}>
        <a href="" className={styles.selected}>
          New Arrival
        </a>
        <a href="">Bestseller</a>
        <a href="">Featured Products</a>
      </div>
      <div className={styles.productscards}>
        <Card data={products} />
      </div>
    </div>
  );
}

export default Products;
