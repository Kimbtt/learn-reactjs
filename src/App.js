import React from "react";
import "./App.css";
import AlbumFeature from "./features/Album/pages";
import Counter from "./components/Counter";
import ColorBox from "./components/ColorBox";
import TodoFeature from "./features/Todo/components";
import {Link, NavLink, Route, Switch} from "react-router-dom";

function App() {
  const name = "kim";
  const age = 18;
  const isMale = true;
  const student = {
    name: "Ease Frontend",
  };
  const colorList = ["red", "green", "blue"];

  return (
      <>
    {/*// <div className="App">*/}
    {/*//   /!*<TodoFeature />*!/*/}
    {/*//   <AlbumFeature/>*/}
    {/*// </div>*/}

      {/*// <div>*/}
      {/*//   <ColorBox></ColorBox>*/}
      {/*//   <Counter></Counter>*/}
      {/*// </div>*/}

        <div className="App">
          Header
          {/*<p><Link to="/todos">Todo</Link></p>*/}
          {/*<p><Link to="/albums">Album</Link></p>*/}

          <p><NavLink to="/todos">Todo</NavLink></p>
          <p><NavLink to="/albums">Album</NavLink></p>

          {/*
          Sự khác biệt giữa Link và NavLink
          NavLink sẽ thêm một số thuộc tính vào thẻ như: class="active"
          */}

          {/*
          Công dụng của Switch:
          nó sẽ match lần lượt từ trên xuống dưới nếu cái nào match chính xác đầu tiên thì  sẽ dừng lại
          Tránh trường hợp bị render nhiều component
          */}
          <Switch>
            <Route path="/" component={TodoFeature}></Route>
            <Route path="/" component={TodoFeature}></Route>
            <Route path="/" component={TodoFeature}></Route>
            <Route path="/todos" component={TodoFeature}></Route>
            <Route path="/albums" component={AlbumFeature}></Route>
          </Switch>
          Footer
        </div>

    </>
  );
}

export default App;
