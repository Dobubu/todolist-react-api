import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Todo } from '../api/todo';
import { TodoItemWrapper, TodoLabel, TodoInput } from '../pages/TodoListStyled';

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <TodoItemWrapper>
      <li>
        <TodoLabel>
          <TodoInput type="checkbox" />
          <span>{item.content}</span>
        </TodoLabel>
        <a href="#">
          <FontAwesomeIcon icon="times" />
        </a>
      </li>
    </TodoItemWrapper>
  );
};

export default TodoItem;
