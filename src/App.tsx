import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './layout/Default';
import Auth from './pages/Auth';
import TodoList from './pages/TodoList';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="todolist" element={<TodoList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
