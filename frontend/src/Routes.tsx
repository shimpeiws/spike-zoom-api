import * as React from "react";
import { Switch } from "react-router";
import { Route, Link } from "react-router-dom";
import { Top } from "./Top";
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
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
