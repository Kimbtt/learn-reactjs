import React from "react";
import "./App.css";
import AlbumFeature from "./features/Album/pages";
import Counter from "./components/Counter";
import ColorBox from "./components/ColorBox";
import TodoFeature from "./features/Todo/components";

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
          <TodoFeature/>
        </div>

    </>
  );
}

export default App;
