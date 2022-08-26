import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import TodoList from './pages/TodoList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
