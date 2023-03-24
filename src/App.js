import logo from './logo.svg';
import './App.css';
import PrimarySerachAppBar from './components/PrimarySearchAppBar'
import Profile from './components/Profile.js'
import RecipesPage from './components/RecipesPage'
import AddRecipe from './components/AddRecipe';
import SignIn from './components/SignIn'

function App() {
  return (
    <div>
      <PrimarySerachAppBar/>
      <AddRecipe/>
    </div>
  );
}

export default App;
