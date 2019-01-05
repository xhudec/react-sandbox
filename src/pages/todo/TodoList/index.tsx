import React, { useReducer, useState, FormEvent, ChangeEvent } from 'react'

import { Section } from 'components/styled/layout'

interface TodoItem {
  id: string
  text: string
  completed: boolean
}

interface TodoListState {
  items: TodoItem[]
}

interface TodoListAction {
  type: string
  payload: any
}

const ACTION_TYPES = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  COMPLETE_ITEM: 'COMPLETE_ITEM',
  UNDO_ITEM: 'UNDO_ITEM',
}

const todoReducer = (state: TodoListState, action: TodoListAction): TodoListState => {
  console.info('[todoReducer]: previousState: ', state, 'next Action: ', action)

  switch (action.type) {
    case ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      }
    case ACTION_TYPES.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(todoItem => todoItem.id !== action.payload.id),
      }
    case ACTION_TYPES.COMPLETE_ITEM:
      return {
        ...state,
        items: state.items.map(todoItem =>
          todoItem.id === action.payload.id ? { ...todoItem, completed: true } : todoItem
        ),
      }
    case ACTION_TYPES.UNDO_ITEM:
      return {
        ...state,
        items: state.items.map(todoItem =>
          todoItem.id === action.payload.id ? { ...todoItem, completed: false } : todoItem
        ),
      }
    default:
      return state
  }
}

const INITIAL_STATE = {
  items: [
    {
      id: 'todo-0',
      text: 'Setup TypeScript',
      completed: true,
    },
    {
      id: 'todo-1',
      text: 'Implement Logic',
      completed: false,
    },
    {
      id: 'todo-2',
      text: 'Implement styles',
      completed: false,
    },
    {
      id: 'todo-3',
      text: 'Implement animations',
      completed: false,
    },
  ],
}

// TODO: refactor
const TodoList = () => {
  const [{ items }, dispatch] = useReducer(todoReducer, INITIAL_STATE)
  const [todoText, setTodoText] = useState('')
  const [showCompleted, setShowCompleted] = useState(false)

  const completedTodos = items.filter(todoItem => todoItem.completed)
  const notCompletedTodos = items.filter(todoItem => !todoItem.completed)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    dispatch({
      type: ACTION_TYPES.ADD_ITEM,
      payload: {
        id: `todo-${items.length}`,
        text: todoText,
      },
    })

    setTodoText('')
  }

  return (
    <div>
      <Section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="add-todo-item">New task</label>
          <input
            id="add-todo-item"
            name="add-todo-item"
            type="text"
            value={todoText}
            placeholder="Enter task..."
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTodoText(event.target.value)
            }}
          />
        </form>
      </Section>
      <Section>
        In Progress
        {notCompletedTodos.length > 0 ? (
          <ul>
            {notCompletedTodos.map(todoItem => (
              <li key={todoItem.id}>
                {todoItem.text}
                <button
                  onClick={() =>
                    dispatch({ type: ACTION_TYPES.COMPLETE_ITEM, payload: { id: todoItem.id } })
                  }
                >
                  ✅
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: ACTION_TYPES.DELETE_ITEM, payload: { id: todoItem.id } })
                  }
                >
                  🗑
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>👍 All tasks done. Enjoy your day!</div>
        )}
      </Section>

      <Section>
        {showCompleted ? (
          <>
            Completed Tasks
            <ul>
              {completedTodos.map(todoItem => (
                <li key={todoItem.id}>
                  <span style={{ textDecoration: 'line-through' }}>{todoItem.text}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: ACTION_TYPES.UNDO_ITEM, payload: { id: todoItem.id } })
                    }
                  >
                    ❌
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: ACTION_TYPES.DELETE_ITEM, payload: { id: todoItem.id } })
                    }
                  >
                    🚮
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={() => setShowCompleted(false)}>Hide Completed Tasks</button>
          </>
        ) : (
          <button onClick={() => setShowCompleted(true)}>Show Completed Tasks</button>
        )}
      </Section>
    </div>
  )
}

export default TodoList
