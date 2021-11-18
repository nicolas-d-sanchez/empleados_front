
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from './components/router/router'

import TopMenu from './components/navbar/TopMenu';

function App() {
  return (
    <div className="App">
        <TopMenu />
        <AppRouter />
  
    </div>
  );
}

export default App;
