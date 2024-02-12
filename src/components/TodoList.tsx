import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";

interface props {
  todoList: Array<Todo>;
  setTodoList: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  CompletedTodos: Array<Todo>;
}

const TodoList: React.FC<props> = ({
  todoList,
  setTodoList,
  CompletedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todoList ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todoList__heading">Active Tasks</span>
            {todoList?.map((todo, index) => (
              <TodoItem
                index={index}
                todoList={todoList}
                todo={todo}
                key={todo.id}
                setTodoList={setTodoList}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`todoList  ${
              snapshot.isDraggingOver ? "dragcomplete" : "remove"
            }`}
          > 
            <span className="todoList__heading">Completed Tasks</span>
            {CompletedTodos?.map((todo, index) => (
              <TodoItem
                index={index}
                todoList={CompletedTodos}
                todo={todo}
                key={todo.id}
                setTodoList={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;