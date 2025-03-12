import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [  //property
        { 
          id:1,
          todo: "Todo msg",
          completed: false,
        }
    ],
    addTodo: (todo) => {}, //functionality
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompelete:(id) => {}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

/*
Simpler Syntax: useContext directly returns the context value, while Consumer requires a function as a child, making the code more verbose.

No Nesting: useContext avoids the need for nested Consumer components, which makes the code cleaner and easier to manage.

Modern Approach: useContext is part of the React Hooks system, which is the modern and recommended way to work with context in functional components.

Cleaner Code: useContext makes code more readable and easier to debug, as it doesn’t require passing a function to access context.

Preferred for Functional Components: useContext works seamlessly with functional components, whereas Consumer is more suited for class components.

In short, useContext is simpler, cleaner, and the modern approach for accessing context in functional components.
*/