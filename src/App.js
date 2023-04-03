import './App.css';
import PrimarySerachAppBar from './components/PrimarySearchAppBar'
import Profile from './components/Profile.js'
import RecipesPage from './components/RecipesPage'
import AddRecipe from './components/AddRecipe';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail';
import WrongAddress from './components/alert/WrongAddress';
import { Fullscreen } from '@mui/icons-material';
import Ingredients from './components/Ingredients';
import Categories from './components/Categories';

function App() {

  const styles = {
    paperContainer: {
        backgroundImage: `url(${"./img/burger.jpg"})`,
        width: '100%',
        opacity: '0.2'

    }
  };

  return (
    <div>
      <PrimarySerachAppBar/>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipe/:id" element={<RecipeDetail/>} />
          <Route path='/addRecipe' element={<AddRecipe/>}/>
          <Route path='/ingredients' element={<Ingredients/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path="/" element={<RecipesPage/>} />
          <Route path="*" element={<WrongAddress/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
