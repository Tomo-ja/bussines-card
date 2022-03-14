import './App.css';
import Photo from './compornets/Photo';
import Profile from './compornets/Profile';
import About from './compornets/About';
import Interests from './compornets/Interests';
import SnsFooter from './compornets/SnsFooter';

function App() {
  return (
    <div className="App">
      <Photo />
      <Profile />
      <About />
      <Interests />
      <SnsFooter />
    </div>
  );
}

export default App;
