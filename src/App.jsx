import './App.css';
import './styles/variables.css';
import HeaderImg from './components/HeaderImg/HeaderImg';
import PreparationTime from './components/PreparationTime/PreparationTime';
import Ingredients from './components/Ingredients/Ingredients';
import Instructions from './components/Instructions/Instructions';
import Nutrition from './components/Nutrition/Nutrition';

function App() {
   return (
      <>
         <HeaderImg />
         <PreparationTime />
         <Ingredients />
         <Instructions />
         <Nutrition />
      </>
   );
}

export default App;
