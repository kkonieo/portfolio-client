import React from 'react';
import GlobalStyle from '../shared/GlobalStyle';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
// import { useDispatch, useSelector } from 'react-redux';

// pages
import IntroPage from '../pages/IntroPage';
import MainPage from '../pages/MainPage';
import UserListPage from '../pages/UserListPage';
import HashTagPage from '../pages/HashTagPage';
import PortfolioListPage from '../pages/PortfolioListPage';
import PortfolioPage from '../pages/PortfolioPage';
import PostListPage from '../pages/PostListPage';
import PostPage from '../pages/PostPage';
import EditorPage from '../pages/EditorPage';
import MyPage from '../pages/MyPage';
import TeamMemberPage from '../pages/TeamMemberPage';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/userlist" component={UserListPage} />
          <Route exact path="/hashtag" component={HashTagPage} />
          <Route exact path="/portfoliolist" component={PortfolioListPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/postlist" component={PostListPage} />
          <Route exact path="/post" component={PostPage} />
          <Route exact path="/editor" component={EditorPage} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/team" component={TeamMemberPage} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
