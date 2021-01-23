import React from 'react';
import firebase from './firebase';
import '../App.css'

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };
  return (
    <div className="list">
      {todo.complete ?
        <span>
        <i className="fa fa-check" aria-hidden="true"></i>
        {todo.title}
        </span>
        :
        <span>{todo.title}</span>
        }
      <button onClick={deleteTodo} className="btns-del"><i className="fa fa-trash" aria-hidden="true"></i></button>{' '}
      <button onClick={completeTodo} className="btns-complete">{todo.complete ? 'Completed' : 'Incomplete'}</button>
    </div>
  );
}