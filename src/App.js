import React from 'react';
import GlobalStyle from './common/styles/GlobalStyle';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ScrollToTop from './common/utils/ScrollToTop';

// pages
import {
  IntroPage,
  MainPage,
  EditorPage,
  ProjectListPage,
  ProjectPage,
  UserListPage,
  TeamMemberPage,
  CallBackPage,
  // PostListPage,
  // PostPage,
} from './pages';

// redux
import { history } from './common/redux/configureStore';
// import { useDispatch, useSelector } from 'react-redux';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/main/:id" component={MainPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/editor" component={EditorPage} />
          <Route exact path="/projectlist" component={ProjectListPage} />
          <Route exact path="/project/:id" component={ProjectPage} />
          <Route exact path="/userlist" component={UserListPage} />
          <Route exact path="/team" component={TeamMemberPage} />
          <Route exact path="/callback" component={CallBackPage} />
          {/* <Route exact path="/postlist" component={PostListPage} />
          <Route exact path="/post/:id" component={PostPage} /> */}
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
