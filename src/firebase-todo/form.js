import React, { useState } from 'react';
import firebase from './firebase';
import TodoList from './todoList';
import '../App.css'
import {useSpring, animated} from 'react-spring';

export default function Form() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const p = useSpring({
    to: {opacity: 1, marginTop: 0},
    from: {opacity: 0, marginTop: -500}
  })

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    if(title === ""){
        setError(true);
    }
    else{
    setError(false);
    const todoRef = firebase.database().ref('Todo');
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
    setTitle('');
    }
  };

  return (
    <animated.div style={p}>
      <div className="container">  
      <h3>Todo List App</h3>
      <div className="container">
      <input type="text" 
      className="form-control" 
      value={title} 
      onChange={handleOnChange}
      autoFocus
      />
      {error && <span style={{color: 'red', fontSize: '20px', float:'left', backgroundColor:'black'}}>Enter some todo.</span>}<br/>
      <button onClick={createTodo} style={{marginLeft:'5px', float:'right'}} className="btn btn-success">Add item</button>{' '}
      </div>
      <TodoList />
      </div>
    </animated.div>
  );
}