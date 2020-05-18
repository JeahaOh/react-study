import React, { Component } from 'react';
import { Navbar, Button, Image, AccordionCollapse } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import {} from 'jquery.cookie';
import rootUrl from '../srvc/ServerUrl';
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Header extends Component {
  state = {
    buttonDisplay: 'none',
  };

  componentDidMount() {
    if ($.cookie('login_id')) {
      this.setState({
        buttonDisplay: 'block',
      });
    } else {
      this.setState({
        buttonDisplay: 'none',
      });
    }
  }

  logout = () => {
    axios
      .get(rootUrl + '/member/logout', {
        headers,
      })
      .then((res) => {
        if (res.data.message) {
          $.removeCookie('login_id');
          alert('BYE!');
          window.location.href = '/';
        }
      });
  };
  render() {
    const buttonStyle = {
      margin: '0px 5px 0px 10px',
      display: this.state.buttonDisplay,
    };

    return (
      <>
        <div>
          <Navbar>
            <Navbar.Brand href="/">Board</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <NavLink to="/myPage">
                <Button style={buttonStyle} variant="primary">
                  회원 정보 수정
                </Button>
              </NavLink>
              <NavLink to="/">
                <Button style={buttonStyle} variant="primary">
                  글 목록
                </Button>
              </NavLink>
              <NavLink to="/writePost">
                <Button style={buttonStyle} variant="primary">
                  글 쓰기
                </Button>
              </NavLink>
              <Button
                style={buttonStyle}
                onClick={this.logout}
                variant="primary"
              >
                로그아웃
              </Button>
            </Navbar.Collapse>
          </Navbar>
          <Image src="./img/main.jpg" fluid />
        </div>
      </>
    );
  }
}

export default Header;
