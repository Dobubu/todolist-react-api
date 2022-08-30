import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { apiGetTodoList, apiAddTodo, Todo, apiDeleteTodo, apiToggleTodo } from '../api/todo';
import {
  TodoListPage,
  Container,
  TodoWrapper,
  TodoInputEl,
  TodoContent,
  TodoTab,
  TodoItems,
  TodoStatistics
} from './TodoListStyled';
import NavBar from '../components/NavBar';
import TodoItem from '../components/TodoItem';

const TodoList = () => {
  const [list, setList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');

  const fetchList = async () => {
    try {
      const res = await apiGetTodoList();
      setList(res.data.todos);
    } catch (e: any) {
      alert(e.message);
    }
  };

  const todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = async () => {
    try {
      const dict = {
        todo: {
          content: todo
        }
      };
      await apiAddTodo(dict);

      setTodo('');
      fetchList();
    } catch (e: any) {
      alert(e.message);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      const res = await apiDeleteTodo(id);

      fetchList();
      alert(res.data.message);
    } catch (e: any) {
      alert(e.message);
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      const res = await apiToggleTodo(id);

      fetchList();
      if (res.data.completed_at) {
        alert(`${res.data.content} 切換成完成`);
      } else {
        alert(`${res.data.content} 切換成待完成`);
      }
    } catch (e: any) {
      alert(e.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <TodoListPage>
      <NavBar />
      <Container>
        <TodoWrapper>
          <TodoInputEl>
            <input type="text" value={todo} onChange={todoHandler} placeholder="請輸入待辦事項" />
            <a onClick={addTodo}>
              <FontAwesomeIcon icon="plus" />
            </a>
          </TodoInputEl>
          <TodoContent>
            <TodoTab>
              <li>
                <a href="#" className="active">
                  全部
                </a>
              </li>
              <li>
                <a href="#">待完成</a>
              </li>
              <li>
                <a href="#">已完成</a>
              </li>
            </TodoTab>
            <TodoItems>
              {list.map((o) => (
                <TodoItem key={o.id} item={o} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
              ))}
              <TodoStatistics>
                <p> {list.length} 個已完成項目</p>
                <a href="#">清除已完成項目</a>
              </TodoStatistics>
            </TodoItems>
          </TodoContent>
        </TodoWrapper>
      </Container>
    </TodoListPage>
  );
};

export default TodoList;
