import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import rootUrl from '../srvc/ServerUrl';
import axios from 'axios';
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class PostDetail extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    console.info('PostDetail Component Did Mount');
    if (this.props.location.query !== undefined) {
      this.getDetail();
    } else {
      window.location.href = '/';
    }
  }

  deletePost = (postNo) => {
    const param = {
      headers,
      postNo,
    };
    if (window.confirm('정말 삭제?')) {
      axios
        .post(rootUrl + '/post/delete', param)
        .then((res) => {
          alert('게시글 삭제됨.');
          window.location.href = '/';
        })
        .catch((err) => {
          console.log(err);
          alert('삭제 실패');
        });
    }
  };

  getDetail = () => {
    const param = {
      headers,
      postNo: this.props.location.query.postNo,
    };
    const marginBottom = {
      marginBottom: 5,
    };
    axios.post(rootUrl + '/post/detail', param).then((res) => {
      if (res.data.post[0]) {
        const post = (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>{res.data.post[0].title}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: res.data.board[0].content,
                    }}
                  ></td>
                </tr>
              </tbody>
            </Table>
            <div>
              <NavLink to={{pathname:/postW}}
            </div>
          </div>
        );
      }
    });
  };
}
