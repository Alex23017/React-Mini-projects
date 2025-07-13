import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import "../../App.scss";
import "./home_style.scss";
import Modal from "../Modal/Modal";
import Quiz from "../Quiz/Quiz";
import RenderApp from "../UsersRender/App";
import AppConvector from "../ConvectorValue/src/AppConvector";
import AppGallery from "../CollectionGallery/AppGallery";
import Test from "../LazyLoading/LazyLoading";
import LazyLoading from "../LazyLoading/LazyLoading";
import TodoList from "../TodoList/TodoList";

const Home = () => {
  return (
    <div className="container-items">
      <Link to={"/counter"}>
        <Counter />
      </Link>
      <Link to={"/modal"}>
        <Modal />
      </Link>
      <Link to={"/quiz"}>
        <Quiz />
      </Link>

      <Link to={"/users"}>
        <RenderApp />
      </Link>

      <Link to={"/convector"}>
        <AppConvector />
      </Link>
      <Link to={"/gallery"}>
        <AppGallery />
      </Link>
      <Link to={"/lazyloading"}>
        <LazyLoading />
      </Link>

      <Link to={"/test"}>
        <Test />
      </Link>
      <Link to={"/todolist"}>
        <TodoList />
      </Link>
    </div>
  );
};

export default Home;
