import React from "react";
import "./App.css";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/components";
import {Link, NavLink, Route, Switch} from "react-router-dom";
import CounterFeatures from "./features/Counter";

function App() {

    return (
        <>
            <div className="App">
                <p><NavLink to="/todos">Todo</NavLink></p>
                <p><NavLink to="/albums">Album</NavLink></p>

                <Switch>
                    <Route exact path="/" component={CounterFeatures}></Route>
                    <Route path="/todos" component={TodoFeature}></Route>
                    <Route path="/albums" component={AlbumFeature}></Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
