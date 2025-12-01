import recipe from '../../data/recipe.json';
import styles from './PreparationTime.module.css';

export default function PreparationTime() {
   return (
      <div className={styles.wrapper}>
         <h3 className={styles.title}>Preparation Time</h3>

         <ul className={styles.list}>
            <li>
               <strong>Total:</strong> {recipe.preparationTime.total}
            </li>
            {recipe.preparationTime.details.map((item, i) => (
               <li key={i}>
                  <strong>{item.label}:</strong> {item.time}
               </li>
            ))}
         </ul>
      </div>
   );
}
