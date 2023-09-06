import React, {useState} from "react";
import ListPage from "../pages/ListPage";
import DetailPage from "../pages/DetailPage";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import NotFound from "./NotFound";

function TodoFeature(props) {
    const match = useRouteMatch();


  return (
    <div>
        TODO SHARE UI

      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default TodoFeature;
