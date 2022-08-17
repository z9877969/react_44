import { useDispatch, useSelector } from "react-redux";
import { priorityOptions } from "../TodoForm/TodoForm";
import { changeFilter } from "../../redux/todo/todoSlice";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todo.filter);

  const handleChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div style={{ width: "200px", margin: "0 auto 20px" }}>
      <h3>Filter priority:</h3>
      <select name="filter" value={filter} onChange={handleChange}>
        <option value="all">All</option>
        <option value={priorityOptions.LOW}>
          Low
        </option>
        <option value={priorityOptions.MEDIUM}>
          Medium
        </option>
        <option value={priorityOptions.HIGH}>
          High
        </option>
      </select>
    </div>
  );
};

export default TodoFilter;
