import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Img_02, Img_03, Img_05 } from "../../imagepath";
import io from 'socket.io-client'
import jwt_decode from "jwt-decode";
import Axios from "../../../../apiClient";
import { ME, OTHER } from "../../../../keys";
import msgSound from '../../../assets/message.mp3'
const audio = new Audio(msgSound);
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
  return socket;
}
const socket = initSocket();
const Chats = (props) => {
  // const audioPlayer = React.useRef();
  // console.log('[Chats].Props', props);
  const messagesScrollRef = React.useRef(null)
  const [currentUser, setCurrentUser] = React.useState({});
  const [chats, setChats] = React.useState([]);
  const [room, setRoom] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [typingUser, setTypingUser] = React.useState(null);
  const selectedChat = (chats || []).find(c => c.selected) || {};
  const [onlineUsers, setOnlineUsers] = React.useState([])


  const sendMessage = () => {
    if (message !== '') {
      const createdAt = Date.now();
      // Send message to server. We can't specify who we send the message to from the frontend. We can only send to server. Server can then send message to rest of users in room
      socket.emit('send_message', { sender: currentUser, _id: room, room, seen: true, text: message, createdAt, attachments: [] });
      setMessage('');
      setTypingUser(null)
    }
  };
  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log('receive_message', data);
      // audio.play()
      setTypingUser(null)
      const updateChat = chats.map((chat, index) => {
        if (chat._id === data._id) {
          chat.messages = [
            ...chat.messages,
            {
              _id: data._id,
              text: data.text,
              sender: data.sender,
              attachments: data.attachments,
              seen: selectedChat._id === data._id,
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
        const dbChats = (res.data.doc.chats || []).map((chat, index) => {
          socket.emit('join_room', { userId: decoded._id, _id: decoded._id, username: decoded.username, room: chat._id })
          return { ...chat, selected: index === 0 }
        });
        if (dbChats.length) {
          const firstChat = dbChats[0];
          setRoom(firstChat._id)
          setChats(dbChats)
        } else setChats([])
      })
      .catch(err => console.log('login error', err))
    return () => socket.off("join_room")
  }, [])

  React.useEffect(() => {
    messagesScrollRef.current.scrollTop = messagesScrollRef.current.scrollHeight
  }, [chats])
  React.useEffect(() => {
    socket.on("user_typing", user => {
      if (user._id !== currentUser._id) {
        setTypingUser(user)
      }
    })
    socket.on("user_joined", user => {
      console.log('[user_joined].user', user);
      if (user.userId !== currentUser._id) {
        setOnlineUsers([...onlineUsers, user.userId])
      }
    })
    return () => {
      socket.off("user_typing")
      socket.off("user_joined")
    }
  }, [currentUser, onlineUsers])
  const onChatSelect = (chat, index) => {
    const mdu = chats.map((c, j) => {
      if (c._id === chat._id) return { ...c, selected: true, messages: c.messages.map(m => ({ ...m, seen: true })), unreadCount: 0 };
      else return { ...c, selected: false }
    })
    setChats(mdu);
    setRoom(chat._id)
    socket.emit('join_room', { username: currentUser.username, room: chat._id });
    socket.emit('seen_msgs', chat._id)
  }
  const formatDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }
  const getChatUser = chat => {
    const chatUser = (chat.usersRef || []).filter(u => u._id !== currentUser._id)[0] || { username: "" };
    console.log('chatUser', chatUser);
    return chatUser;
  }
  // console.log('selectedChat', selectedChat);
  // console.log('chats', chats);
  console.log('onlineUsers', onlineUsers);
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
                          const chatUser = getChatUser(chat);
                          const messages = chat.messages;
                          const lastMessage = messages[messages.length - 1];
                          const unreadMsgs = messages.filter(msg => !msg.seen).length;
                          return <div
                            style={{ cursor: 'pointer' }}
                            key={`chat-key-${index}`}
                            className={`media d-flex ${chat.selected ? 'active' : ''}`}
                            onClick={() => onChatSelect(chat)}>
                            <div className="media-img-wrap flex-shrink-0">
                              <div className={`avatar avatar-${onlineUsers.includes(chatUser._id) ? 'online' : 'away'}`}>
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
                                  {lastMessage?.text}{" "}
                                </div>
                              </div>
                              <div>
                                {/* <div className="last-chat-time block">05 min</div> */}
                                {unreadMsgs > 0 ? <div className="badge bgg-yellow badge-pill"><p style={{ fontSize: 8 }}>{unreadMsgs}</p></div> : null}

                              </div>
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
                        <div className={`avatar avatar-${onlineUsers.includes(getChatUser(selectedChat)._id) ? 'online' : 'away'}`}>
                          <img
                            // src={Img_05}
                            src={OTHER}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="user-name">{getChatUser(selectedChat).username} </div>
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
                                          <span>{formatDateFromTimestamp(message.createdAt)}</span>
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
                    </div>
                    {
                      typingUser &&
                      <p style={{ color: 'lightgrey' }}>{`${typingUser.username} is typing...`}</p>
                    }
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
                        onChange={(e) => {
                          socket.emit('user_typing', { ...currentUser, room })
                          setMessage(e.target.value)
                        }}
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
        {/* <audio ref={audioPlayer} src={'https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg'} style={{ display: "none" }} /> */}
      </div>
      {/* Video Call Modal */}
    </>

  )

}
export default Chats;