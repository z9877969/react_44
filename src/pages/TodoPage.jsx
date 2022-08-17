import ToDoForm from "../components/TodoForm/TodoForm";
import ToDoList from "../components/TodoList/TodoList";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import { useEffect } from "react";
import { getTodoApi } from "../utils/firebaseApi";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../redux/todo/todoOperations";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isExistTodo = useSelector((state) => Boolean(state.todo.items.length));

  useEffect(() => {
    !isExistTodo && dispatch(getTodo());
  }, [dispatch, isExistTodo]);

  return (
    <div>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </div>
  );
};

export default TodoPage;
