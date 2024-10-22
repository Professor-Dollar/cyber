import Cameras from '../../../public/Cameras';
import Computers from '../../../public/Computers';
import Gaming from '../../../public/Gaming';
import Headphones from '../../../public/Headphones';
import Phones from '../../../public/Phones';
import SmartWatches from '../../../public/SmartWatches';
import styles from './Categorize.module.css';
const Categorize = () => {
  const categorycard = [
    {
      icon: <Phones />,
      category: 'Phones',
    },
    {
      icon: <SmartWatches />,
      category: 'Smart Watches',
    },
    {
      icon: <Cameras />,
      category: 'Cameras',
    },
    {
      icon: <Headphones />,
      category: 'Headphones',
    },
    {
      icon: <Computers />,
      category: 'Computers',
    },
    {
      icon: <Gaming />,
      category: 'Gaming',
    },
  ];
  return (
    <div className={styles.categorizer}>
      <div className={styles.content}>
        <div className={styles.toggler}>
          <h3>Browse By Category </h3><span><img src="/Arrow.png"/><img src="ArrowRight.png"/></span>
        </div>
        <div className={styles.categories}>
        {categorycard.map((category, index) => (
          <div key={index} className={styles.category}>
            <div className="icon">
              {category.icon}
              <p>{category.category}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Categorize