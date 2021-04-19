import { Switch, Route, Redirect, IndexRoute, useRouteMatch } from "react-router-dom";
import  Computer from "./System/Computer/index";


function RouterPathSystem() {




  let { path} = useRouteMatch();

  return (

    <Switch>
      <Route path={path} exact component={Computer} />
    </Switch>

  )
}

export default RouterPathSystem;
