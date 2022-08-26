import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TodoItemWrapper, TodoLabel, TodoInput, } from "../pages/TodoListStyled";

interface TodoItem {
  id: string;
  content: string;
  completed_at: boolean;
}

interface TodoItemProps {
  item: TodoItem
}

const TodoItem = ({ item }: TodoItemProps) => {
  return (
    <TodoItemWrapper>
      <li>
        <TodoLabel>
          <TodoInput type="checkbox" checked={item.completed_at} onChange={(e) => console.log(e)}/>
          <span>{item.content}</span>
        </TodoLabel>
        <a href="#">
          <FontAwesomeIcon icon="times" />
        </a>
      </li>
    </TodoItemWrapper>
  )
}

export default TodoItem