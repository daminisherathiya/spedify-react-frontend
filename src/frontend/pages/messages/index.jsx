import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Img_05 } from "../../components/imagepath";
import Axios from "../../../Axios";
import { BASE_URL, ME, OTHER } from "../../../keys";
import msgSound from '../../assets/message.mp3'
import { useUserContext } from "../../../context/UserContext";
import { useLocation } from "react-router-dom";
import Socket from "../../../socket/Socket";
import { getFilePath } from "../../../helpers";
// const audio = new Audio(msgSound);

const Messages = (props) => {
  // const audioPlayer = React.useRef();
  const { state } = useUserContext();
  // console.log('[Mesaages].state', state);
  if (!state.isLoggedIn) return null;
  const socket = Socket.get();
  const [chats, setChats] = React.useState([]);
  const [room, setRoom] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [typingUser, setTypingUser] = React.useState(null);
  const selectedChat = (chats || []).find(c => c.selected) || {};
  const [onlineUsers, setOnlineUsers] = React.useState([])
  const messagesScrollRef = React.useRef(null);
  const currentUser = state.user || {};
  const location = useLocation();
  const sendMessage = () => {
    try {
      if (message !== '') {
        const createdAt = Date.now();
        socket.emit('send_message', { sender: currentUser, _id: room, room, seen: true, text: message, createdAt, attachments: [], isLocalMessage: true });
        setMessage('');
        setTypingUser(null)
      }
    } catch (error) {
      console.log('[sendMessage].error', error);
    }

  };
  useEffect(() => {
    socket.on('receive_message', (data) => {
      try {
        console.log('receive_message', data);
        // audio.play()
        setTypingUser(null)
        const updateChat = chats.map((chat, index) => {
          if (chat._id === data._id) {
            chat.messages = [
              ...chat.messages,
              {
                ...data,
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
      } catch (error) {
        console.log('[receive_message].error', error);
      }

    });

    // Remove event listener on component unmount
    return () => socket.off('receive_message');
  }, [socket, room]);
  useEffect(() => {
    document.body.className = 'chat-page';
    return () => { document.body.className = ''; }
  });
  useEffect(() => {
    Axios.get(`/api/v1/chats/getChatsByUser`)
      .then(res => {
        const dbChats = (res.data.doc.chats || []).map((chat, index) => {
          socket.emit('join_room', { userId: currentUser._id, _id: currentUser._id, username: currentUser.username, room: chat._id })
          return {
            ...chat, selected: location.state ? location.state.chatIds.includes(chat._id) ? true : false : index === 0
          }
        });
        if (dbChats.length) {
          const firstChat = dbChats[0];
          setRoom(location.state ? location.state.chatIds[0] : firstChat._id)
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
  const getChatUser = (chat) => {
    const chatUser = (chat.usersRef || []).filter(u => u._id !== currentUser._id)[0] || { username: "" };
    // console.log('chatUser', chatUser);
    return chatUser;
  }
  // console.log('selectedChat', selectedChat);
  // console.log('chats', chats);
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
                          const isUserOnline = onlineUsers.includes(chatUser._id);
                          return <div
                            style={{ cursor: 'pointer' }}
                            key={`chat-key-${index}`}
                            className={`media d-flex ${chat.selected ? 'active' : ''}`}
                            onClick={() => onChatSelect(chat)}>
                            <div className="media-img-wrap flex-shrink-0">
                              <div className={`avatar avatar-${isUserOnline ? 'online' : 'away'}`}>
                                <img
                                  src={getFilePath(chatUser.picture)}
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
                            src={getFilePath((selectedChat.usersRef || []).find(u => u._id !== currentUser._id)?.picture ?? {})}
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="user-name">{getChatUser(selectedChat).username} </div>
                        <div className="user-status">{onlineUsers.includes(getChatUser(selectedChat)._id) ? "online" : "offline"}</div>
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
                            // console.log('message.sender', message.sender);
                            return <li key={`msg-index-${msgIndex}`} className={`media ${isCurrentUser ? 'sent' : 'received'} d-flex`}>
                              <div className="avatar flex-shrink-0">
                                <img
                                  src={message.isLocalMessage ? message.sender.picture : getFilePath(message.sender.picture)}
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
                          src={currentUser.picture}
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
export default Messages;