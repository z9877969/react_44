import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import s from "./TodoForm.module.scss";
import { useForm } from "../../hooks/useForm";
import { addTodo } from "../../redux/todo/todoOperations";
import { addTodoApi } from "../../utils/firebaseApi";

export const priorityOptions = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

const initialForm = {
  descr: "",
  priority: "",
};

const TodoForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.todo.isLoading);

  const { form, handleChange, handleSubmit } = useForm({
    initialValues: initialForm,
    onSubmit: (values) => {
      dispatch(addTodo({ ...values, isDoneStatus: false }));
      // addTodoApi(values).then((res) => console.log("res :>> ", res));
    },
  });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span> Description </span>
        <input
          className={s.input}
          type="text"
          name="descr"
          value={form.descr}
          onChange={handleChange}
        />
      </label>

      <div className={s.labelWrapper}>
        <div className={s.radioWrapper}>
          <input
            id="formRadioLow"
            className={s.input}
            type="radio"
            name="priority"
            value={priorityOptions.LOW}
            checked={priorityOptions.LOW === form.priority} // "low" === priority
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioLow">
            LOW
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioMedium"
            className={s.input}
            type="radio"
            name="priority"
            value={priorityOptions.MEDIUM}
            checked={priorityOptions.MEDIUM === form.priority}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioMedium">
            MEDIUM
          </label>
        </div>
        <div className={s.radioWrapper}>
          <input
            id="formRadioHigh"
            className={s.input}
            type="radio"
            name="priority"
            value={priorityOptions.HIGH}
            checked={priorityOptions.HIGH === form.priority}
            onChange={handleChange}
          />
          <label className={`${s.label} ${s.radio}`} htmlFor="formRadioHigh">
            HIGH
          </label>
        </div>
      </div>
      <button className={s.submit} type="submit">
        {isLoading ? "Loading..." : "Ok"}
      </button>
    </form>
  );
};

export default TodoForm;
