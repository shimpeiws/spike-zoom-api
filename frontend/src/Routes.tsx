import * as React from "react";
import { Switch } from "react-router";
import { Route, Link } from "react-router-dom";
import { Top } from "./Top";
import { Callback } from "./Callback";
import { NotFound } from "./NotFound";

export interface Props {}

export function Routes(_: Props) {
  return (
    <>
      <>
        <Link to="/">TOP</Link>
        <br />
      </>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/callback" component={Callback} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
