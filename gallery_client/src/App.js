import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div>
      <h1 className='uk-text-center uk-text-success'>Gallery</h1>
      <div className='uk-container uk-container-medium'>
        <Home />
        </div>
    </div>
  );
}

export default App;
