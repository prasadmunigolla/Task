import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App.js";
import Form from "./components/Form/Form.js";

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/components/Form/Form.js" component={Form} />

      </Switch>
      </BrowserRouter>,
      rootElement
    );
