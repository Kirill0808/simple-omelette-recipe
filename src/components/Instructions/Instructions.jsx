import recipe from '../../data/recipe.json';
import styles from './Instructions.module.css';

export default function Instructions() {
   return (
      <div>
         <h2 className={styles.title}>Instructions</h2>

         <ol className={styles.list}>
            {recipe.instructions.map((step, i) => (
               <li key={i}>
                  <span>{step.title}:</span> {step.text}
               </li>
            ))}
         </ol>

         <hr className={styles.line} />
      </div>
   );
}
