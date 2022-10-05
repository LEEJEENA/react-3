import React from 'react';
import './style.css'

function Todo({ todo, onRemove, onClickButton}) {

  
  return (
    <div className='todo-container'>
      <div className="Todo-b">
        <h2>{todo.title}</h2>
        <div>{todo.content}</div>
      </div>
      <div className="button-set">
        <button className="todo-delete-button" onClick={() => onRemove(todo.id)}>삭제하기</button>
        {todo.isdone===true? <button className="todo-complete-button" onClick={() =>onClickButton(todo.id)}>완료</button> : <button className="todo-complete-button" onClick={() =>onClickButton(todo.id)}>취소</button>}
      </div>
    

    </div>
  );
}

export default Todo;

