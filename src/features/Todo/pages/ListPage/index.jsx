import React, {useEffect, useState} from "react";
import TodoList from "../../components/TodoList";
import {useHistory, useLocation, useRouteMatch} from "react-router-dom";
import queryString from "query-string"
import TodoForms from "../../components/TodoForm";

function ListPage(props) {
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

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList)
    const [filterStatus, setFilterStatus] = useState(( )=>{
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus(params.status || 'all')
    }, [location.search]);

    const handleTodoClick = (todo, index) => {
        //Clone current array to the new one
        const  newTodoList = [...todoList];
        //toggle state
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? "completed" : 'new',
        }

        newTodoList[index] = newTodo;
        /*update todo list*/
        setTodoList(newTodoList)
    }

    const  showAll = () => {
        // setFilterStatus("all")
        const  queryParam ={status: 'all'}
        console.log(location);
        console.log(history);
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam)
        })
    }

    const  showCompleted = () => {
        // setFilterStatus("completed")
        const  queryParam ={status: 'completed'}
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam)
        })
    }

    const  showNew = () => {
        // setFilterStatus("new")
        const  queryParam ={status: 'new'}
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam)
        })
    }

    const renderTodoList = todoList.filter(abc => filterStatus==='all' || filterStatus ===abc.status)

    const handleTodoFormSubmit =(values) => {
        console.log('Form submit: ', values)
        const newTodo = {
            it: todoList.length + 1,
            title: values.title,
            status: 'new'
        }
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>What to do</h3>
            <TodoForms onSubmit = {handleTodoFormSubmit}/>
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

export default ListPage;
