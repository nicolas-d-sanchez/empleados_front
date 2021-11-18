
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import TopMenu from './components/navbar/TopMenu';

function App() {
  return (
    <div className="App">
        <TopMenu />
        <Login />
  
    </div>
  );
}

export default App;
