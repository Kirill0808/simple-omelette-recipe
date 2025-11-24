import styles from './Ingredients.module.css';

function Ingredients() {
   return (
      <div>
         <h2 className={styles.title}>Ingredients</h2>
         <ul>
            <li>2–3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
         </ul>
         <hr className={styles.line} />
      </div>
   );
}

export default Ingredients;
