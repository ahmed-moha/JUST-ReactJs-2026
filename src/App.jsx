import useReducerScore from './hooks/useReducerScore';
import { WithoutCallbackExample, WithCallbackExample } from './hooks/useCallbackExample';
import { useMemoExampleWithout, useMemoExampleWith } from './hooks/useMemoExample';

function MemoTodosSection({ title, note, useMemoHook }) {
  const { count, todos, calculation, increment, addTodo } = useMemoHook();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>
        <h4 className="font-medium">My Todos</h4>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button
          type="button"
          className="bg-gray-700 text-white px-4 py-2 rounded-md m-1"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      <hr className="my-4" />

      <div>
        <p>Count: {count}</p>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md m-1"
          onClick={increment}
        >
          +
        </button>
        <h4 className="font-medium mt-2">Expensive Calculation</h4>
        <p>{calculation}</p>
        <p className="text-sm text-gray-600 mt-2">{note}</p>
      </div>
    </div>
  );
}

function App() {
  // useReducer: update player scores in an array state
  const { score, handleIncrease } = useReducerScore();

  return (
    <div className="max-w-2xl space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">useReducer Example</h2>
        {score.map((player) => (
          <div key={player.id} className="mb-2">
            <label className="flex items-center gap-3">
              <input
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => handleIncrease(player)}
                value={player.name}
              />
              <span>{player.score}</span>
            </label>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">useCallback Example</h2>
        <WithoutCallbackExample />
        <div className="mt-6">
          <WithCallbackExample />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">useMemo Example</h2>
        <MemoTodosSection
          title="Without useMemo"
          note="This version executes the expensive function also when you click Add Todo."
          useMemoHook={useMemoExampleWithout}
        />
        <div className="mt-8">
          <MemoTodosSection
            title="With useMemo"
            note="This version recalculates only when count changes."
            useMemoHook={useMemoExampleWith}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
