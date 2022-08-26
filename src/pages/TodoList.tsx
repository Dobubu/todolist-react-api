import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TodoListPage, Container, TodoWrapper, TodoInputEl, TodoContent, TodoTab, TodoItems, TodoStatistics } from "./TodoListStyled";
import NavBar from "../components/NavBar";
import TodoItem from "../components/TodoItem";

const TodoList = () => {
  const list = [{
    "id": "8f19f39bb12058ca83e6f997aefe3813",
    "content": "把冰箱發霉的檸檬拿去丟",
    "completed_at": true
  }, {
    "id": "8f19f39bb12058ca83e6f997aefe3814",
    "content": "打電話叫媽媽匯款給我",
    "completed_at": false
  }, {
    "id": "8f19f39bb12058ca83e6f997aefe3815",
    "content": "整理電腦資料夾",
    "completed_at": false
  }, {
    "id": "8f19f39bb12058ca83e6f997aefe3816",
    "content": "繳電費水費瓦斯費",
    "completed_at": false
  }, {
    "id": "8f19f39bb12058ca83e6f997aefe3817",
    "content": "約vicky禮拜三泡溫泉",
    "completed_at": false
  }, {
    "id": "8f19f39bb12058ca83e6f997aefe3818",
    "content": "約ada禮拜四吃晚餐",
    "completed_at": false
  }]

  return (
    <TodoListPage>
      <NavBar />
      <Container>
        <TodoWrapper>
          <TodoInputEl>
            <input type="text" placeholder="請輸入待辦事項" />
            <a href="#">
              <FontAwesomeIcon icon="plus" />
            </a>
          </TodoInputEl>
          <TodoContent>
            <TodoTab>
              <li><a href="#" className="active">全部</a></li>
              <li><a href="#">待完成</a></li>
              <li><a href="#">已完成</a></li>
            </TodoTab>
            <TodoItems>
              {list.map((o) =>
                <TodoItem key={o.id} item={o} />
              )}
              <TodoStatistics>
                <p> 5 個已完成項目</p>
                <a href="#">清除已完成項目</a>
              </TodoStatistics>
            </TodoItems>
          </TodoContent>
        </TodoWrapper>
      </Container>
    </TodoListPage>
  )
}

export default TodoList