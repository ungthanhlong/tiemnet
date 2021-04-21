import { Switch, Route, Redirect, IndexRoute, useRouteMatch } from "react-router-dom";
import  Computer from "./System/Computer/index";
import  Order from "./System/Statistics/Order/index";

function RouterPathSystem() {




  let { path} = useRouteMatch();

  return (

    <Switch>
      <Route path={path} exact component={Computer} />
      <Route path={`${path}/order-statistics`} exact component={Order} />
    </Switch>

  )
}

export default RouterPathSystem;
