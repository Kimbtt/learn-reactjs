import React from "react";
import "./App.css";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/components";
import {Link, NavLink, Redirect, Route, Router, Switch} from "react-router-dom";
import NotFound from "./features/Todo/components/NotFound";
import productApi from "./api/productApi";

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
