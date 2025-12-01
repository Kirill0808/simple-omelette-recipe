import recipe from '../../data/recipe.json';
import styles from './Ingredients.module.css';

function Ingredients() {
   return (
      <div>
         <h2 className={styles.title}>Ingredients</h2>
         <ul>
            {recipe.ingredients.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
         <hr className={styles.line} />
      </div>
   );
}

export default Ingredients;
