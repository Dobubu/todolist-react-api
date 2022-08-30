import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Todo } from '../api/todo';
import { TodoItemWrapper, TodoLabel, TodoInput } from '../pages/TodoListStyled';

interface TodoItemProps {
  item: Todo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const TodoItem = ({ item, deleteTodo, toggleTodo }: TodoItemProps) => {
  const { id, content, completed_at } = item;

  return (
    <TodoItemWrapper>
      <li>
        <TodoLabel>
          <TodoInput
            type="checkbox"
            defaultChecked={completed_at === null ? false : true}
            onClick={() => toggleTodo(id)}
          />
          <span>{content}</span>
        </TodoLabel>
        <a onClick={() => deleteTodo(id)}>
          <FontAwesomeIcon icon="times" />
        </a>
      </li>
    </TodoItemWrapper>
  );
};

export default TodoItem;
