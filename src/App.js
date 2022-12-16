import './App.css';
import { Navbar } from './Navbar';
import { Shop } from './Shop';

function App() {
  return (
    <div>
      <Navbar />
      <Shop />
    </div>
  );
}

export default App;

// At the very beggining we'll install some libraries (npm i redux react-redux redux-thunk):
// - redux
// - react-redux
// - redux thunk (this is the middleware)