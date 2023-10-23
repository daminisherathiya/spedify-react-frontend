import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Img_02, Img_03, Img_05 } from "../../imagepath";
import io from 'socket.io-client'
import jwt_decode from "jwt-decode";
import Axios from "../../../../apiClient";
import { ME, OTHER } from "../../../../keys";
const initSocket = () => {
  const localData = JSON.parse(localStorage.getItem('@user')) || { token: '' };
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
  const messagesScrollRef = React.useRef(null)
  const [currentUser, setCurrentUser] = React.useState({});
  const [chats, setChats] = React.useState([]);
  const [room, setRoom] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [typingUser, setTypingUser] = React.useState(null);


  const sendMessage = () => {
    if (message !== '') {
      const createdAt = Date.now();
      // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
      socket.emit('send_message', { sender: currentUser, _id: room, room, seen: false, text: message, createdAt, attachments: [] });
      setMessage('');
    }
  };
  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log('receive_message', data);
      if (room !== data._id) return;
      // if (room !== data._id) return chatListCB(data);
      const updateChat = chats.map((chat, index) => {
        if (chat._id === data._id) {
          chat.messages = [
            ...chat.messages,
            {
              text: data.text,
              sender: data.sender,
              attachments: data.attachments,
              seen: data.seen,
              _id: data._id,
              createdAt: data.createdAt,
            }
          ]
        }
        return chat;
      })
      setChats(updateChat)
    });

    // Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, [socket, room]);
  useEffect(() => {
    document.body.className = 'chat-page';
    return () => { document.body.className = ''; }
  });
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('@user'));
    const decoded = jwt_decode(localData.token);
    // console.log('decoded', decoded);
    setCurrentUser(decoded)
    localStorage.setItem('@decoded', JSON.stringify(decoded))
    Axios.get(`/api/v1/chats/getChatsByUser`)
      .then(res => {
        const dbChats = (res.data.doc.chats || []).map((chat, index) => ({ ...chat, selected: index === 0 }));
        if (dbChats.length) {
          const firstChat = dbChats[0];
          socket.emit('join_room', { username: decoded.username, room: firstChat._id })
          setRoom(firstChat._id)
          setChats(dbChats)
        } else setChats([])
      })
      .catch(err => console.log('login error', err))
  }, [])
  React.useEffect(() => {
    messagesScrollRef.current.scrollTop = messagesScrollRef.current.scrollHeight
  }, [chats])
  React.useEffect(() => {
    socket.on("user_typing", user => {
      console.log('user', user);
      console.log('currentUser', currentUser);
      if (user._id !== currentUser._id) {
        setTypingUser(user)
      }
    })
    return () => socket.off("user_typing")
  }, [currentUser])
  console.log('chats', chats);
  const onChatSelect = (chat, index) => {
    const mdu = chats.map((c, j) => {
      if (c._id === chat._id) return { ...c, selected: true, unreadCount: 0 };
      else return { ...c, selected: false }
    })
    setChats(mdu);
    setRoom(chat._id)
    socket.emit('join_room', { username: currentUser.username, room: chat._id })
  }
  const selectedChat = (chats || []).find(c => c.selected) || {};
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
                      {
                        (chats || []).map((chat, index) => {
                          const chatUser = (chat.usersRef || []).filter(u => u._id !== currentUser._id)[0];
                          const messages = chat.messages;
                          const lastMessage = messages[messages.length - 1]
                          return <div
                            style={{ cursor: 'pointer' }}
                            key={`chat-key-${index}`}
                            className={`media d-flex ${chat.selected ? 'active' : ''}`}
                            onClick={() => onChatSelect(chat)}>
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
                                <div className="user-name">{chatUser.username}</div>
                                <div className="user-last-chat">
                                  {lastMessage.text}{" "}
                                </div>
                              </div>
                              {/* <div>
                                <div className="last-chat-time block">05 min</div>
                                <div className="badge bgg-yellow badge-pill">11</div>
                              </div> */}
                            </div>
                          </div>
                        })
                      }
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
                    <div className="chat-scroll" ref={messagesScrollRef}>
                      <ul className="list-unstyled">
                        {
                          (selectedChat.messages || []).map((message, msgIndex) => {
                            const isCurrentUser = message.sender._id === currentUser._id;
                            return <li key={`msg-index-${msgIndex}`} className={`media ${isCurrentUser ? 'sent' : 'received'} d-flex`}>
                              <div className="avatar flex-shrink-0">
                                <img
                                  src={isCurrentUser ? ME : OTHER}
                                  alt="User Image"
                                  className="avatar-img rounded-circle"
                                />
                              </div>
                              <div className="media-body flex-grow-1">
                                <div className="msg-box">
                                  <div>
                                    <p>{message.text}</p>
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
                          })
                        }
                      </ul>
                    {
                      typingUser &&
                      <p style={{ color: 'lightgrey' }}>{`${typingUser.username} is typing...`}</p>
                    }
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
                        onFocus={() => socket.emit('user_typing', { ...currentUser, room })}
                        onBlur={() => setTypingUser(null)}
                        type="text"
                        className="input-msg-send form-control"
                        placeholder="Reply..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        onKeyUp={(e) => {
                          console.log('onKeyUp', e.key)
                          if (e.key === 'Enter') sendMessage(e.target.value)
                        }}
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
                        onClick={sendMessage}
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