import './App.scss';
import Todolist from './Components/Todolist/Todolist';

const App = ()=> {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h2>Todo-ify</h2>
        </div>
      </header>

      <Todolist/>
    </div>
  );
}

export default App;
