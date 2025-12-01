import HeroImage from '../../assets/images/top-image.jpg';
import styles from './HeaderImg.module.css';

export default function HeaderImg() {
   return (
      <div>
         <img className={styles.logo} src={HeroImage} alt="Omelette" />
         <h1 className={styles.title}>Simple Omelette Recipe</h1>
         <p className={styles.description}>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
            cooked to perfection, optionally filled with your choice of cheese, vegetables, or
            meats.
         </p>
      </div>
   );
}
