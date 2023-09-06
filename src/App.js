import React, {useEffect}from "react";
import "./App.css";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/components";
import {Link, NavLink, Redirect, Route, Router, Switch} from "react-router-dom";
import NotFound from "./features/Todo/components/NotFound";
import productApi from "./api/productApi";
import Header from "./components/header";

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                response_limit: 10,
            };
            const productList = await productApi.getAll(params);
            // console.log(productList)
        }
        fetchProducts();
    }, []);

    return (
        <>
            <div className="App">
                <Header>SS</Header>



                <Switch>
                    <Redirect from="/home" to="/" exact></Redirect>
                    <Redirect from="/post-list/:postId" to="/posts/:postId" exact></Redirect>

                    <Route path="/" component={TodoFeature} exact></Route>
                    <Route path="/todos" component={TodoFeature}></Route>
                    <Route path="/albums" component={AlbumFeature}></Route>

                    <Route component={NotFound}></Route>
                </Switch>
                Footer
            </div>

        </>
    );
}

export default App;
