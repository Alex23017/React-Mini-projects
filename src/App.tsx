import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Counter from "./components/Counter/Counter";
import "./App.scss";
import Home from "./components/pages/Home";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Quiz from "./components/Quiz/Quiz";
import RenderApp from "./components/UsersRender/App";
import AppConvector from "./components/ConvectorValue/src/AppConvector";
import AppGallery from "./components/CollectionGallery/AppGallery";
import LazyLoading from "./components/LazyLoading/LazyLoading";
import TodoList from "./components/TodoList/TodoList";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Game from "./components/Game/Game";
import Test from "./components/Test/Test";
import TaiwLindTheme from "./components/ThemeTailwind/components/TaiwLindTheme";
import AppTailwind from "./components/ThemeTailwind/AppTailwind";





function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="wrapper h-screen w-screen">
      <Header />
      <div className="fixed right-20 bottom-56">
        <ScrollUp />
      </div>
      <div className="fixed right-20 bottom-20  ">
        <TaiwLindTheme />
      </div>

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/modal"} element={<Modal />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/users"} element={<RenderApp />} />
        <Route path={"/convector"} element={<AppConvector />} />
        <Route path={"/gallery"} element={<AppGallery />} />
        <Route path={"/lazyloading"} element={<LazyLoading />} />
        <Route path={"/tailwind"} element={<AppTailwind />} />
        <Route path={"/todolist"} element={<TodoList />} />
        <Route path={"/game"} element={<Game />} />
        <Route path={"/test"} element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
