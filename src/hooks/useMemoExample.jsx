import { useMemo, useState } from 'react';

// W3Schools useMemo example: expensive calculation
const expensiveCalculation = (num) => {
  console.log('Calculating...');

  for (let i = 0; i < 1000000000; i += 1) {
    num += 1;
  }

  return num;
};

// Without useMemo: calculation runs on every render (even when adding todos)
function useMemoExampleWithout() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((value) => value + 1);
  };

  const addTodo = () => {
    setTodos((items) => [...items, 'New Todo']);
  };

  return { count, todos, calculation, increment, addTodo };
}

// With useMemo: calculation runs only when count changes
function useMemoExampleWith() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((value) => value + 1);
  };

  const addTodo = () => {
    setTodos((items) => [...items, 'New Todo']);
  };

  return { count, todos, calculation, increment, addTodo };
}

export { useMemoExampleWithout, useMemoExampleWith };
