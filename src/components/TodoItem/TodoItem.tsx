import React from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
  handleDeleteTodo: (id: number) => void;
  selectedIDs: number[];
  setEditTodoId: (id: number) => void;
};

export const TodoItem: React.FC<Props> = React.memo(({
  todo,
  handleDeleteTodo,
  selectedIDs,
  setEditTodoId,
}) => {
  return (
    <div
      data-cy="Todo"
      className={cn(
        'todo',
        { completed: todo.completed },
      )}
      key={todo.id}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          defaultChecked
          onClick={() => setEditTodoId(todo.id)}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">{todo.title}</span>
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDeleteButton"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        ×
      </button>

      <div
        data-cy="TodoLoader"
        className={cn(
          'modal overlay',
          { 'is-active': selectedIDs.includes(todo.id) },
        )}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
});
