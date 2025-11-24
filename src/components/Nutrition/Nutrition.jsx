import styles from './Nutrition.module.css';

function Nutrition() {
   return (
      <div>
         <h2 className={styles.title}>Nutrition</h2>
         <p className={styles.description}>
            The table below shows nutritional values per serving without the additional fillings.
         </p>
         <div className={styles.table}>
            <div className={styles.tableRow}>
               <div className={styles.left}>Calories</div>
               <div className={styles.right}>277kcal</div>
            </div>
            <hr className={styles.line} />
            <div className={styles.tableRow}>
               <div className={styles.left}>Carbs</div>
               <div className={styles.right}>0g</div>
            </div>
            <hr className={styles.line} />
            <div className={styles.tableRow}>
               <div className={styles.left}>Protein</div>
               <div className={styles.right}>20g</div>
            </div>
            <hr className={styles.line} />
            <div className={styles.tableRow}>
               <div className={styles.left}>Fat</div>
               <div className={styles.right}>22g</div>
            </div>
            <hr className={styles.line} />
         </div>
      </div>
   );
}

export default Nutrition;
