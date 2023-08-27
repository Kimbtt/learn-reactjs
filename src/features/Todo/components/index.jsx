import React, {useState} from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {

  const initTodoList = [
    {
      id: 1,
      title: "eat",
      status: "new"
    },
    {
      id: 2,
      title: "sleep",
      status: "completed"
    },
    {
      id: 3,
      title: "Code",
      status: "new"
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList)
  const [filterStatus, setFilterStatus] = useState('all')

  const handleTodoClick = (todo, index) => {
    //Clone current array to the new one
    const  newTodoList = [...todoList];
    //toggle state
    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? "completed" : 'new',
    }

    newTodoList[index] = newTodo;
    // update todo list
    setTodoList(newTodoList)
  }

  const  showAll = () => {
    setFilterStatus("all")
  }

  const  showCompleted = () => {
    setFilterStatus("completed")
  }

  const  showNew = () => {
    setFilterStatus("new")
  }

  const renderTodoList = todoList.filter(abc => filterStatus==='all' || filterStatus ===abc.status)


  return (
    <div>
      <h3>Todo List</h3>
      <div>

      <TodoList todoList={renderTodoList} onTodoClick = {handleTodoClick} />
      <button onClick={showAll}>Show All</button>
      <button onClick={showCompleted}>Show Completed</button>
      <button onClick={showNew}>Show New</button>

      </div>
    </div>
  );
}

export default TodoFeature;
