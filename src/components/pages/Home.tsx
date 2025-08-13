import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import Modal from "../Modal/Modal";
import TodoList from "../TodoList/TodoList";

const Home = () => {
  return (
    <div>
      <Link to="/counter">
        <div>
          <Counter />
        </div>
      </Link>

      <Link to="/modal">
        <div>
          <Modal />
        </div>
      </Link>

      <Link to="/todolist">
        <div>
          <TodoList />
        </div>
      </Link>
    </div>
  );
};

export default Home;
