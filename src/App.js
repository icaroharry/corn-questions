import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import QuestionListPage from "./pages/QuestionListPage";
import NewQuestionPage from "./pages/NewQuestionPage";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <h1>Corn Questions</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/new-question" component={NewQuestionPage} />
            <Route path="/" component={QuestionListPage} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
