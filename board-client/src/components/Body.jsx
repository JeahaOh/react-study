import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import $ from 'jquery';
import {} from 'jquery.cookie';

import LoginPage from './LoginPage';
import PostPage from './PostPage';
import WritePostPage from './WritePostPage';
import PostDetail from './postDetail';
import MyPage from './MyPage';

class Body extends Component {
  render() {
    let showingPage;
    function getShowingPage() {
      const isLogin = $.cookie('login_id');
      console.log(isLogin);
      if (isLogin) {
        showingPage = <Route exact path="/" component={PostPage}></Route>;
        return showingPage;
      } else {
        showingPage = <Route exact path="/" component={LoginPage}></Route>;
        return showingPage;
      }
    }
    getShowingPage();

    return (
      <>
        <div>
          <Route path="/mypage" component={MyPage} />
          <Route path="/writePost" component={WritePostPage} />
          <Route path="/post/postDetail" component={PostDetail} />
          {showingPage}
        </div>
      </>
    );
  }
}

export default Body;
