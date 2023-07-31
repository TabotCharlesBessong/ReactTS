import { TodoList, AddTodo } from "./component";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex items-start justify-center flex-col mx-auto" >
      <Toaster position="top-right" />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
