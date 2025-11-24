import styles from './PreparationTime.module.css';

function PreparationTime() {
   return (
      <div className={styles.wrapper}>
         <h2 className={styles.title}>Preparation time</h2>
         <ul className={styles.list}>
            <li>
               <span>Total:</span> Approximately 10 minutes
            </li>
            <li>
               <span>Preparation:</span> 5 minutes
            </li>
            <li>
               <span>Cooking:</span> 5 minutes
            </li>
         </ul>
      </div>
   );
}

export default PreparationTime;
