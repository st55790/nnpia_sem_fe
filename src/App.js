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

function App() {

  return (
    <div>
      <PrimarySerachAppBar/>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipe" element={<RecipeDetail/>} />
          <Route path='/addRecipe' element={<AddRecipe/>}/>
          <Route path="/" element={<RecipesPage/>} />
          <Route path="*" element={<WrongAddress/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
