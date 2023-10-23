import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Img_02, Img_03, Img_05 } from "../../imagepath";
import io from 'socket.io-client'
import jwt_decode from "jwt-decode";
const ME = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745';
const OTHER = 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg'
const localData = JSON.parse(localStorage.getItem('@user')) || { token: '' };
console.log('localData', localData);
const initSocket = () => {
  const socket = io('http://localhost:80/chats', {
    auth: {
      token: localData.token
    },
  });
  socket.on('connect', () => {
    console.log('a user connected');

  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('connect_error', (err) => {
    console.log('connect_error', err.message); // prints the message associated with the error
  });

  socket.on('connect_msg', (data) => {
    console.log('connect_msg', data); // prints the message associated with the error
  });
  socket.on('user_joined', data => {
    console.log('user_joined', data);
  })
  return socket;
}
const socket = initSocket();
const Chats = (props) => {
  // console.log('[Chats].Props', props);
  const [currentUser, setCurrentUser] = React.useState({})
  useEffect(() => {
    document.body.className = 'chat-page';
    return () => { document.body.className = ''; }
  });
  useEffect(() => {
    const decoded = jwt_decode(localData.token);
    // console.log('decoded', decoded);
    setCurrentUser(decoded)
  }, [])
  // React.useEffect(() => {
  //   const localData = JSON.parse(localStorage.getItem('@token'));
  //   axios.get(`${BASE_URL}/api/v1/chats/getChatsByUser`)
  //     .then(res => {
  //       const dbChats = (res.data.doc.chats || []).map((chat, index) => ({ ...chat, selected: index === 0 }));
  //       if (dbChats.length) {
  //         const firstChat = dbChats[0];
  //         socket.emit('join_room', { username, room: firstChat._id })
  //         setRoom(firstChat._id)
  //         setChats(dbChats)
  //       } else setChats([])
  //     })
  //     .catch(err => console.log('login error', err))
  // }, [])
  return (
    <>
      {/* Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 back-text">
              <Link to="/dashboard" className="btn btn-primary back-btn">
                <i className="fa fa-chevron-left" /> Back{" "}
              </Link>
            </div>
            <div className="col-md-12">
              <div className="chat-window">
                {/* Chat Left */}
                <div className="chat-cont-left">
                  <div className="chat-header">
                    <form className="chat-search">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <i className="fas fa-search icon-circle" />
                        </div>
                        <input
                          type="text"
                          className="form-control rounded-pill"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="chat-users-list">
                    <div className="chat-scroll">
                      <Link to=";" className="media d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <img
                              src={OTHER}
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Andrew Glover </div>
                            <div className="user-last-chat">
                              It seems logical that the{" "}
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">05 min</div>
                            <div className="badge bgg-yellow badge-pill">11</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Chat Left */}
                {/* Chat Right */}
                <div className="chat-cont-right">
                  <div className="chat-header">
                    <Link
                      id="back_user_list"
                      to=""
                      className="back-user-list"
                    >
                      <i className="material-icons">chevron_left</i>
                    </Link>
                    <div className="media d-flex">
                      <div className="media-img-wrap flex-shrink-0">
                        <div className="avatar avatar-online">
                          <img
                            // src={Img_05}
                            src={ME}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="user-name">{currentUser.username} </div>
                        <div className="user-status">online</div>
                      </div>
                    </div>
                    <div className="chat-options">
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i className="material-icons icon-grey">local_phone</i>
                      </Link>
                      <Link
                        to=""
                        data-bs-toggle="modal"
                        data-bs-target="#video_call"
                      >
                        <i className="material-icons icon-grey">videocam</i>
                      </Link>
                      <Link to="">
                        <i className="material-icons">more_vert</i>
                      </Link>
                    </div>
                  </div>
                  <div className="chat-body">
                    <div className="chat-scroll">
                      <ul className="list-unstyled">
                        <li className="media received d-flex">
                          <div className="avatar flex-shrink-0">
                            <img
                              src={Img_02}
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>Good morning.....</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:00 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media sent d-flex">
                          <div className="avatar flex-shrink-0">
                            <img
                              // src={Img_05}
                              src={ME}
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>
                                  Good morning, How are you? What about our next
                                  meeting?
                                </p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:02 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="media received d-flex">
                          <div className="avatar flex-shrink-0">
                            <img
                              src={Img_02}
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>I am good thanks</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:03 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chat-footer">
                    <div className="input-group">
                      <div className="avatar">
                        <img
                          // src={Img_05}
                          src={ME}
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <input
                        type="text"
                        className="input-msg-send form-control"
                        placeholder="Reply..."
                      />
                      <div className="btn-file btn">
                        <i className="far fa-grin fa-1x" />
                      </div>
                      <div className="btn-file btn">
                        <i className="fa fa-paperclip" />
                        <input type="file" />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary msg-send-btn rounded-pill"
                      >
                        <i className="fab fa-telegram-plane" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* /Chat Right */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Voice Call Modal */}
      <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Outgoing Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        alt="User Image"
                        // src={Img_05}
                        src={ME}
                        className="call-avatar"
                      />
                      <h4>Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to=""
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/voice-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">call</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Outgoing Call */}
            </div>
          </div>
        </div>
      </div>
      {/* /Voice Call Modal */}
      {/* Video Call Modal */}
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Incoming Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        className="call-avatar"
                        src={Img_05}
                        alt="User Image"
                      />
                      <h4>Darren Elder</h4>
                      <span>Calling ...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to=""
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/video-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">videocam</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Incoming Call */}
            </div>
          </div>
        </div>
      </div>
      {/* Video Call Modal */}
    </>

  )

}
export default Chats;