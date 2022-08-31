import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { apiGetTodoList, apiAddTodo, Todo, apiDeleteTodo, apiToggleTodo } from '../api/todo';
import {
  Container,
  TodoWrapper,
  TodoInputEl,
  TodoContent,
  TodoTab,
  TodoTabItem,
  TodoItems,
  TodoStatistics,
  TodoEmpty
} from './TodoListStyled';
import TodoItem from '../components/TodoItem';
import Loading from '../components/Loading';
import LoadingIcon from '../components/LoadingIcon';
import emptyTodo from '../assets/images/empty.png';

export enum TodoStatus {
  All = 'All',
  Open = 'Open',
  Completed = 'Completed'
}

const TodoList = () => {
  const [list, setList] = useState<Todo[]>([]);
  const [filterList, setFilterList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');
  const [todoStatus, setTodoStatus] = useState<TodoStatus>(TodoStatus.All);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddLoading, setIsAddLoading] = useState(false);

  const fetchList = async () => {
    try {
      const res = await apiGetTodoList();
      setList(res.data.todos);
    } catch (e: any) {
      alert(e.message);
    }
  };

  const fetchListInit = async () => {
    setIsLoading(true);
    await fetchList();
    setIsLoading(false);
  };

  const todoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodo = async () => {
    try {
      if (!todo) throw new Error('代辦事項必填');

      setIsAddLoading(true);
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
    } finally {
      setIsAddLoading(false);
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

  const clearCompletedTodos = async () => {
    const completedList = list.filter((o) => o.completed_at);

    if (completedList.length) {
      const promiseArray = completedList.map((o) => apiDeleteTodo(o.id));
      await Promise.all(promiseArray);
      fetchList();
      alert('清除成功');
    } else {
      alert('目前沒有完成項目');
    }
  };

  const filterListHandler = () => {
    switch (todoStatus) {
      case TodoStatus.Open:
        setFilterList(list.filter((o) => !o.completed_at));
        break;
      case TodoStatus.Completed:
        setFilterList(list.filter((o) => o.completed_at));
        break;
      default:
        setFilterList(list);
        break;
    }
  };

  useEffect(() => {
    filterListHandler();
  }, [todoStatus, list]);

  useEffect(() => {
    fetchListInit();
  }, []);

  return (
    <Container>
      {isLoading ? <Loading /> : <></>}

      <TodoWrapper>
        <TodoInputEl onSubmit={addTodo}>
          <input type="input" value={todo} onChange={todoHandler} placeholder="請輸入待辦事項" />
          {isAddLoading ? <LoadingIcon /> : <></>}
          <a type="submit">
            <FontAwesomeIcon icon="plus" onClick={addTodo} />
          </a>
        </TodoInputEl>
        {list.length > 0 ? (
          <TodoContent>
            <TodoTab>
              <li>
                <TodoTabItem
                  activeStatus={todoStatus === TodoStatus.All}
                  onClick={() => setTodoStatus(TodoStatus.All)}>
                  全部
                </TodoTabItem>
              </li>
              <li>
                <TodoTabItem
                  activeStatus={todoStatus === TodoStatus.Open}
                  onClick={() => setTodoStatus(TodoStatus.Open)}>
                  待完成
                </TodoTabItem>
              </li>
              <li>
                <TodoTabItem
                  activeStatus={todoStatus === TodoStatus.Completed}
                  onClick={() => setTodoStatus(TodoStatus.Completed)}>
                  已完成
                </TodoTabItem>
              </li>
            </TodoTab>
            <TodoItems>
              {filterList.map((o) => (
                <TodoItem key={o.id} item={o} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
              ))}
              <TodoStatistics>
                {todoStatus === TodoStatus.Completed ? (
                  <p> {list.filter((o) => o.completed_at).length} 個已完成項目</p>
                ) : (
                  <p> {list.filter((o) => !o.completed_at).length} 個待完成項目</p>
                )}
                <a onClick={clearCompletedTodos}>清除已完成項目</a>
              </TodoStatistics>
            </TodoItems>
          </TodoContent>
        ) : (
          <TodoEmpty>
            <p>目前尚無待辦事項</p>
            <img src={emptyTodo} />
          </TodoEmpty>
        )}
      </TodoWrapper>
    </Container>
  );
};

export default TodoList;
