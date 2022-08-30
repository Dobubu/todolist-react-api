import TodoAPI from './api';

export interface AddTodoReq {
  todo: {
    content: string;
  };
}

export interface Todo {
  completed_at: string;
  content: string;
  id: string;
}

export interface GetTodoListRes {
  todos: Todo[];
}

export const apiGetTodoList = async () => TodoAPI.get<GetTodoListRes>('/todos');

export const apiAddTodo = async (payload: AddTodoReq) => TodoAPI.post('/todos', payload);

export const apiUpdateTodo = async (payload: AddTodoReq, todoId: string) =>
  TodoAPI.put(`/todos/${todoId}`, payload);

export const apiDeleteTodo = async (todoId: string) => TodoAPI.delete(`/todos/${todoId}`);

export const apiToggleTodo = async (todoId: string) =>
  TodoAPI.patch<Todo>(`/todos/${todoId}/toggle`);
