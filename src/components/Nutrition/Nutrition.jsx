import recipe from '../../data/recipe.json';
import styles from './Nutrition.module.css';

export default function Nutrition() {
   return (
      <div>
         <h2 className={styles.title}>Nutrition</h2>

         <div className={styles.table}>
            <div className={styles.tableRow}>
               <span className={styles.left}>Calories</span>
               <span className={styles.right}>{recipe.nutrition.calories}</span>
            </div>
            <hr className={styles.line} />
            <div className={styles.tableRow}>
               <span className={styles.left}>Carbs</span>
               <span className={styles.right}>{recipe.nutrition.carbs}</span>
            </div>
            <hr className={styles.line} />
            <div className={styles.tableRow}>
               <span className={styles.left}>Protein</span>
               <span className={styles.right}>{recipe.nutrition.protein}</span>
            </div>
            <hr className={styles.line} />
            <div className={styles.tableRow}>
               <span className={styles.left}>Fat</span>
               <span className={styles.right}>{recipe.nutrition.fat}</span>
            </div>
            <hr className={styles.line} />
         </div>
      </div>
   );
}
