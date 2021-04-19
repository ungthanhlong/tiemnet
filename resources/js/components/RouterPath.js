import { Switch, Route, Redirect, IndexRoute } from "react-router-dom";



function RouterPath() {






  return (

    <Switch>

      <Route path="/" exact component={Customer} />
      <Route path="/system" exact component={System} />


    </Switch>

  )
}

export default RouterPath;
