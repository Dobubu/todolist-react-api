import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
