import { TodoList, AddTodo } from "./component";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
